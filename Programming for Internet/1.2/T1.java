/**
 * 
 * @author paah4127
 *
 */
public class T1 extends Thread{

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