using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace Appdoon.Common.CommonRegex
{
    public class CommonRegex
    {

        static public void Main()
        {

        }

        public static bool isValidEmail(string email)
        {

            // This Pattern is use to verify the email
            string strRegex = @"\A(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\Z";

            Regex re = new Regex(strRegex, RegexOptions.IgnoreCase);

            if (re.IsMatch(email))
                return (true);
            else
                return (false);
        }


        public static bool isValidUsername(string username)
        {

            string strRegex = @"(^[a-z A-Z]{3,32}$)";
            Regex re = new Regex(strRegex, RegexOptions.IgnoreCase);
            if (re.IsMatch(username))
                return (true);
            else
                return (false);
        }

        public static bool isValidPassword(string password)
        {

            string strRegex = @"(^[a-z A-Z 0-9 #$%]{6,32}$)";
            Regex re = new Regex(strRegex);
            if (re.IsMatch(password))
                return (true);
            else
                return (false);
        }

    }
}
