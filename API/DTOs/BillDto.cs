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

        public bool IsApproved { get; set; }
    }

    public class BillDtoForApprove
    {
        [Required]
        public int BillId { get; set; }

        [Required]
        public bool IsApproved { get; set; }

      
    }
    public class BillForIdDto
    {
        [Required]
        public int UserId { get; set; }
        public DateTime BillingMonth { get; set; }
    }


    public class BillDepositDto
    {
        public string BkashTransactionNumber { get; set; }
        public string BkashMobileNumber { get; set; }
        public int UserId { get; set; }
    }

    public class BillDtoForDeposit
    {
       
        public int BillId { get; set; }

        [Required]
        public decimal BillAmount { get; set; }

        [Required]
        public DateTime BillingMonth { get; set; }
        public bool IsPaid { get; set; }
        public bool IsApproved { get; set; }

        public virtual DepositBill DepositBill { get; set; }


    }

}
