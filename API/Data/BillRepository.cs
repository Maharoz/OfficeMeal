namespace API.Data
{
    public class BillRepository:IBillRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public BillRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<Bill> GetBillForId(BillForIdDto billForIdDto)
        {
            return await _context.Bill
                 .Where(c => c.UserId == billForIdDto.UserId 
                 && c.BillingMonth.Month == billForIdDto.BillingMonth.Month 
                 && c.BillingMonth.Year == billForIdDto.BillingMonth.Year).FirstOrDefaultAsync();
                 
        }

        public async Task<IEnumerable<Bill>> GetAllPaidClaimedBill()
        {
            return await _context.Bill
                 .Where(c => c.IsPaid == true
                 && c.BillingMonth.Month == DateTime.Now.Month
                 && c.BillingMonth.Year == DateTime.Now.Year).Include(x=>x.DepositBill
                ).ToListAsync();

        }

        public async Task<Bill> GetBillById(int id)
        {
            return await _context.Bill
                 .Where(c => c.UserId == id && c.BillingMonth.Month== DateTime.Now.Month).FirstOrDefaultAsync();

        }

        public async Task<Bill> GetBillByBillId(int id)
        {
            return await _context.Bill
                 .Where(c => c.BillId == id && c.BillingMonth.Month == DateTime.Now.Month).FirstOrDefaultAsync();

        }
        public void Update(Bill obj)
        {
            _context.Bill.Update(obj);
        }
    }
}
