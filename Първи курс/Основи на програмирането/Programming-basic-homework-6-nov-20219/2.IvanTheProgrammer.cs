//2. Иван е програмист в американска компания и работи от вкъщи средно N дни в месеца като 
//изкарва средно по M долара на ден.В края на годината Иван получава бонус, който е равен на 
//2.5 месечни заплати.От спечеленото през годината му се удържат 25% данъци.Напишете програма, 
//която да пресмята, колко е чистата средна печалба на Иван на ден в лева, 
//тъй като той харчи изкараното в България.Приема се, че в годината има точно 365 дни.
//Курсът на долара спрямо лева ще се чете от конзолата.
//От конзолата се четат 3 числа:
//На първия ред – работни дни в месеца. Цяло число в интервала [5…30]
//На втория ред – изкарани пари на ден. Реално число в интервала [10.00… 2000.00]
//На третия ред – курсът на долара спрямо  лева /1 долар = X лева/. Реално число в интервала [0.99… 1.99] – 
//не се изисква проверка за зададените интервали.
//На конзолата да се отпечата 1 число – средната печалба на ден в лева. 

using System;

class IvanTheProgrammer
{
    static void Main()
    {
        //N
        Console.WriteLine("Please enter working days per month:");
        int daysPerMonth = int.Parse(Console.ReadLine());
        //M
        Console.WriteLine("Please enter money per day:");
        double moneyPerDay = double.Parse(Console.ReadLine());
        Console.WriteLine("Please enter exchange rate:");
        double exchangeРate = double.Parse(Console.ReadLine());

        double moneyPerMonth = daysPerMonth * moneyPerDay;
        double moneyAfterTax = ((moneyPerMonth * 12 + moneyPerMonth * 2.5) / 5) * 4;
        double perWorkingDayAfterTax = moneyAfterTax / (daysPerMonth * 12);
        Console.WriteLine("Money per working day after tax : {0:0.00}", perWorkingDayAfterTax * exchangeРate);
    }
}