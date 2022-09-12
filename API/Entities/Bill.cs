using CloudinaryDotNet.Actions;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Bill
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int BillId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required]
        public decimal BillAmount { get; set; }

        [Required]
        public DateTime BillingMonth { get; set; }
        public bool IsPaid { get;set; }
        public AppUser User { get; set; }
        public bool IsApproved { get; set; }

        public virtual DepositBill DepositBill { get; set; }


    }

    public class DepositBill
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int DepositId { get; set; }
        public int BkashTransactionNumber { get; set; }
        public int BankAccountNumber { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        public AppUser User { get; set; }
        public int BillId { get; set; }
    }
}
