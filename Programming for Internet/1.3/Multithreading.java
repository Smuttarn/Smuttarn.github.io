/**
 * 
 * @author paah4127
 *
 */
public class Multithreading {
/** Main class
 */
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

/** Waits n amount of seconds
 * 
 * @param seconds The amount of seconds to wait
 */
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