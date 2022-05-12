using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.CommonValidatores
{
	public class CommonValidatore
	{
		static public bool IsValidLink(string link)
		{
			Uri uriResult;
			bool result = Uri.TryCreate(link, UriKind.Absolute, out uriResult)
				&& (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
			return result;
		}
	}
}
