/**
 * 
 * @author paah4127
 *
 */
public class T2 implements Runnable{
    private Thread aThread;
    private boolean running;

    T2(String name){
        aThread = new Thread(this, name);
        aThread.start();
    }

    public void setActive(boolean bool){
        if(bool){
            System.out.println(aThread.getName() + " has resumed running.");
        }
        running = bool;
    }

    public void run(){
        setActive(true);
        try
        { 
            System.out.println(aThread.getName() + " has started. ");
            int i = 1;
            while(running)
            {
                Thread.sleep(1000);
                System.out.println("Tråd " + aThread.getName() + ": Tråd 2" + " (" + i + "s)");
                i++;
            }
        }
        catch(InterruptedException e)
        {
            System.out.println("Thread interrupted.");
        }
        System.out.println("\n" + aThread.getName() + " has finished running.");
    }

}
