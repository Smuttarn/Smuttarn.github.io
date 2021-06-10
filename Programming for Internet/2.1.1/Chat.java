class Chat extends Thread 
{
	boolean alive = true;
	String host = "127.0.0.1"; 
	int port = 2000;
	GUIClass gui;
	
	public Chat(String in_host, int in_port) 
	{
		host = in_host;
		port = in_port;
		//GUI 
		gui = new GUIClass();
		start();
	}
	
	public void run() 
	{
		while(alive)
		{
			try
			{    
				Socket s = new Socket(host,port);  
				String hostAd = s.getInetAddress().getHostName();
				System.out.println("host addres " + hostAd);
				PrintWriter out = new PrintWriter(new OutputStreamWriter(s.getOutputStream() , "ISO-8859-1"), true);
				BufferedReader in = new BufferedReader( new InputStreamReader(s.getInputStream()));
				BufferedReader stdIn = new BufferedReader( new InputStreamReader(System.in));
				
				gui.out = out;

				//reading from server
				String userInput;
				while(alive)
				{
					userInput = in.readLine();
					gui.uppdateText(userInput);
					
					if(!gui.timeToclose())
					{
						gui.uppdateText(userInput);
						alive = false;
						s.close();
						System.exit(0);
					}
				}
			}
			catch(Exception e)
			{
				System.out.println(e);	
				alive = false;
				System.exit(0);
			}
		}
	}
}
