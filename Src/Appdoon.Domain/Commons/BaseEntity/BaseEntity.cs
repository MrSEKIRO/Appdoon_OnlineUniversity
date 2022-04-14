using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Commons
{
	public class BaseEntity<T>
	{
		public T Id { get; set; }
		public DateTime InsertTime { get; set; }= DateTime.Now;
		public bool IsRemoved { get; set; } = false;
		public DateTime? RemoveTime { get; set; }
		public DateTime? UpdateTime { get; set; }
	}

	public class BaseEntity : BaseEntity<int>
	{
	}
}
