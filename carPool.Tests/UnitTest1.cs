using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using carPool.Context;

namespace carPool.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Test_RideAdditionTestAnswer_Account()
        {
            //arrange           
            //act
            Account testAccount = Ridemaster.RideAddition();            
            string[] numbers = testAccount.Prompt.Split(' ');
            int value1 = int.Parse(numbers[0]);
            int value2 = int.Parse(numbers[2]);
            int total = value1 + value2;
            //assert
            System.Console.WriteLine(testAccount.Prompt);
            System.Console.WriteLine(testAccount.Option1);
            System.Console.WriteLine(testAccount.Option2);
            System.Console.WriteLine(testAccount.Option3);
            System.Console.WriteLine(testAccount.CorrectAnswer);
            System.Console.WriteLine(total);
            switch (testAccount.CorrectAnswer) {
                case 1:
                    Assert.AreEqual(total.ToString(), testAccount.Option1); 
                    break;
                case 2:
                    Assert.AreEqual(total.ToString(), testAccount.Option2); 
                    break;
                case 3:
                    Assert.AreEqual(total.ToString(), testAccount.Option3); 
                    break;
            }
        }

        [TestMethod]
        public void Test_BuildRide_Account()
        {
            //arrange
            //act
            List<Account> testRide = Ridemaster.BuildRide();
            //assert
            System.Console.WriteLine(testRide);
            Assert.AreEqual(8, testRide.Count);
        }

        // [TestMethod]
        // public void CreateRide_SaveToDataBase_Account()
        // {
        //     //arrange
        //     //act
        //     List<Account> testRide = Ridemaster.BuildRide();
        //     MathleticsData.CreateRide(testRide);
        //     //assert
        //     Assert.AreEqual(8, testRide.Count);
        // }

    }
}