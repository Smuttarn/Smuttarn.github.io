import java.io.*;

public class ChatClient
{
	public static void main (String[] args)
	{
		//host and port
		String host = " 127.0.0.1";
		int port = 2000;
		if(args.length > 0)
		{
			System.out.println("Host: "+args[0]);
			host = args[0];
		}			
		else	
		{	
			System.out.println("Host: "+ "atlas.dsv.su.se");
		}			
		
		if(args.length > 1)
		{
			System.out.println("Port: "+args[1]);
			port = Integer.parseInt(args[1]);
		}			
		else	
		{
			System.out.println("Port: "+ "9494"); 
		}
		
		//create read thread
		ChattThread read = new ChattThread(host, port);
		
	}
}