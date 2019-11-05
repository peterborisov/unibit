
//7. Да не изчисли N! (1 ≤ N ≤ 12), като се има предвид че 5!=5*4*3*2*1 или 9!= 9*8*7*6*5*4*3*2*1. 
//Нека от конзолата да се зададе стойност за N.
//На екрана да се отпечата следното:
//„ N! = ………………“ , където N да е въведеното от потребителя число, а след равенството да се извежда стойността на N!

using System;

namespace nFactorial
{
    class nFactorial
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Please enter your number: ");
            int number = int.Parse(Console.ReadLine());

            int factorial = 1;
            for (int i = 1; i <= number; i++)
            {
                factorial *= i;
            }

            Console.WriteLine(factorial);
        }
    }
}
