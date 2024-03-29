using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Runtime.Serialization.Formatters.Binary;
using System.Threading.Tasks;

namespace ProgrammingForInternet_2_1_1_NetworkStuff
{
    /// <summary>
    /// Event handler for new data from the connection.
    /// </summary>
    public delegate void OnReceivedDataEventHandler(object sender, OnReceivedDataEventArgs e);

    public class TCP_Serializer : TCP_Connection
    {
        /// <summary>
        /// Event handler for new data from the connection.
        /// </summary>
        public event OnReceivedDataEventHandler OnData;

        private readonly BinaryFormatter _binaryFormatter;

        /// <summary>
        /// Creates a new <see cref="TCP_Serializer"/> with the provided endpoint information
        /// </summary>
        /// <param name="ipAddress">Remote address of the connection.</param>
        /// <param name="port">Remote port of the connection.</param>
        public TCP_Serializer(IPAddress ipAddress, int port) : base(ipAddress, port)
        {
            _binaryFormatter = new BinaryFormatter();
        }

        /// <summary>
        /// Creates a new <see cref="TCP_Serializer"/> with the provided endpoint information
        /// </summary>
        /// <param name="ipAddress">Remote address of the connection.</param>
        /// <param name="port">Remote port of the connection.</param>
        public TCP_Serializer(IPEndPoint endpoint) : base(endpoint)
        {
            _binaryFormatter = new BinaryFormatter();
        }

        /// <summary>
        /// Creates a new <see cref="TCP_Connection"/> from the provided socket.
        /// </summary>
        /// <param name="socket">Socket to use for connection.</param>
        public TCP_Serializer(Socket socket) : base(socket)
        {
            _binaryFormatter = new BinaryFormatter();
        }

        protected override void SocketDisconnected()
        {
            // no-op
        }

        /// <summary>
        /// Called when new data is read to notify <see cref="OnData"/>
        /// </summary>
        /// <param name="bytes"></param>
        protected override void ReceivedBytes(byte[] bytes)
        {
            using var stream = new MemoryStream(bytes);

            try
            {
                var data = _binaryFormatter.Deserialize(stream);

                OnData?.Invoke(this, new OnReceivedDataEventArgs { data = data });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        /// <summary>
        /// Serializes and sends the provided object
        /// </summary>
        /// <param name="data">object to serialize and send</param>
        public async Task SerializeAndSendAsync(object data)
        {
            using var mStream = new MemoryStream();

            await Task.Run(() => _binaryFormatter.Serialize(mStream, data));
            await SendBytesAsync(mStream.GetBuffer());
        }
    }
}