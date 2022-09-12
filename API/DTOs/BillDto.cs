using CloudinaryDotNet.Actions;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class BillDto
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public decimal BillAmount { get; set; }

        [Required]
        public DateTime BillingMonth { get; set; }
        public bool IsPaid { get; set; }
    }


    public class BillForIdDto
    {
        [Required]
        public int UserId { get; set; }
        public DateTime BillingMonth { get; set; }
    }


    public class BillDepositDto
    {
        public int BkashTransactionNumber { get; set; }
        public int BankAccountNumber { get; set; }
        public int UserId { get; set; }
    }



}
