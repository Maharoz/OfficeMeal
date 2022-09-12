namespace API.Interfaces
{
    public interface IBillRepository
    {
        Task<Bill> GetBillForId(BillForIdDto billForIdDto);
        void Update(Bill obj);
    }
}
