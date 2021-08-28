using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace ProgrammingForInternet_2_1_1_NetworkStuff
{
    /// <summary>
    /// A simple <see cref="TCP_Server"/> for accepting and handling <see cref="TCP_Connection"/>.
    /// </summary>
    public abstract class TCP_Server : IDisposable
    {
        /// <summary>
        /// Address of the local interface which the server listens on.
        /// </summary>
        public IPAddress LocalAddress => _localAddress;

        private IPAddress _localAddress;

        private readonly Socket _socket;
        private readonly List<TCP_Connection> _clients;

        /// <summary>
        /// Creates a new TCP_Server instance.
        /// </summary>
        protected TCP_Server()
        {
            _socket = new Socket(SocketType.Stream, ProtocolType.Tcp);
            _clients = new List<TCP_Connection>();
        }

        /// <summary>
        /// Starts listening for incoming connections.
        /// </summary>
        /// <param name="address">Interface to listen on</param>
        /// <param name="port">Port to listen on</param>
        public void StartAccept(string address = "0.0.0.0", int port = 2000)
        {
            if (!IPAddress.TryParse(address, out _localAddress))
            {
                throw new ArgumentException("Address could not be parsed", nameof(address));
            }

            var endPoint = new IPEndPoint(LocalAddress, port);

            _socket.Bind(endPoint);
            _socket.Listen(10);

            Task.Factory.StartNew(AcceptLoop, TaskCreationOptions.LongRunning);
        }

        /// <summary>
        /// Accepts incoming connections.
        /// </summary>
        private async Task AcceptLoop()
        {
            while (true)
            {
                var clientSocket = await _socket.AcceptAsync();

                _clients.Add( Accept(clientSocket));
            }
        }

        /// <summary>
        /// Override this method to determine what to do with the newly connected socket. This is called when a new client connects.
        /// </summary>
        /// <param name="socket">Client socket</param>
        /// <returns>A <see cref="TCP_Connection"/> handling the socket.</returns>
        protected abstract TCP_Connection Accept(Socket socket);

        /// <summary>
        /// Free up used resources and dispose all connected clients.
        /// </summary>
        public void Dispose()
        {
            _socket?.Dispose();
            _clients.ForEach(c => c.Dispose());
        }
    }
}