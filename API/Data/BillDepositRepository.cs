using API.Interfaces;

namespace API.Data
{
    public class BillDepositRepository : IBillDepositRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public BillDepositRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

     

        public void Update(DepositBill obj)
        {
            _context.DepositBill.Update(obj);
        }
    }
}
