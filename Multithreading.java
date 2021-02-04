public class Multithreading {

public static void main(String[] args) {

        T1 threadExtend = new T1("T1");
        waitForSeconds(5);
        T2 threadRunnable = new T2("T2");
        waitForSeconds(5);
        threadRunnable.setActive(false);
        waitForSeconds(5);
        threadRunnable.setActive(true);
        waitForSeconds(5);
        threadExtend.setActive(false);
        waitForSeconds(5);
        threadRunnable.setActive(false);

    }

    public static void waitForSeconds(int seconds){
        try
        {
            Thread.sleep((seconds * 1000));
        }
        catch(InterruptedException e)
        {
            System.out.println("Thread has been interrupted.");
        }
        
    }

}

class T1 extends Thread{

    private boolean running;

    public T1(String name){
        this.setName(name);
        this.start();
    }

    public void setActive(boolean bool){
        if(bool){
            System.out.println(this.getName() + " has resumed running.");
        }
        running = bool;
    }


    public void run(){
    setActive(true);
        try
        {
            System.out.println(this.getName() + " has started. ");
            int i = 1;
            while(running)
            {
                Thread.sleep(1000);
                System.out.println("Tråd " + this.getName() + ": Tråd 1"+ " (" + i + "s)");
                i++;
                
            }
        }
        catch(InterruptedException e)
        {
            System.out.println("\nThread interrupted!");
        }

        System.out.println("\n" + this.getName() + " has finished running!");
    }
}

class T2 implements Runnable{
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
