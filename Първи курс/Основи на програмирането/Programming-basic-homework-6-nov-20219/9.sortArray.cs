//9. Да се въведе от конзолата едномерен масив от цели числа и да се сортира по низходящ ред.
//Да се изведе сортирания масив.
//Да се изведе минималния му елемент.

using System;
using System.Linq;

namespace sortArray
{
    class sortArray
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine().ToString();
            int[] ia = input.Split(' ').Select(n => Convert.ToInt32(n)).ToArray();
            // Sort array in ascending order. 
            Array.Sort(ia);

            // reverse array 
            Array.Reverse(ia);

            // print all element of array 
            Console.WriteLine("In descending order:");
            foreach (int value in ia)
            {
                Console.Write(value + " ");
            }
            Console.WriteLine();
            Console.WriteLine("Min value is: {0}", ia.Last());

        }
    }
}

