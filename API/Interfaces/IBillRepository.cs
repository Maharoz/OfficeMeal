using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IBillRepository
    {
        Task<IEnumerable<Bill>> GetAllPaidClaimedBill();
        Task<Bill> GetBillForId(BillForIdDto billForIdDto);
        Task<Bill> GetBillById(int id);
        void Update(Bill obj);
    }
}
