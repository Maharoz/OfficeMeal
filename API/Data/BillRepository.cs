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

        public void Update(Bill obj)
        {
            _context.Bill.Update(obj);
        }
    }
}
