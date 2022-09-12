using API.Data;
using Microsoft.AspNetCore.Identity;

namespace API.Controllers
{
    [Authorize]
    public class BillController : BaseApiController
    {

        private readonly IMapper _mapper;
     //   private readonly IBillRepository _billRepository;
        private readonly IUnitOfWork _unitOfWork;
        public BillController(IUnitOfWork unitOfWork, IMapper mapper
            )
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpPost("getBillById")]
        public async Task<ActionResult<Bill>> GetBillById(BillForIdDto billForIdDto)
        {
            var bill = await _unitOfWork.BillRepository.GetBillForId(billForIdDto);
            return Ok(bill);
        }

        [HttpPost("save")]
        public async Task<ActionResult> SaveBill(BillDto billDto)
        {
            var bill = _mapper.Map<Bill>(billDto);
            _unitOfWork.BillRepository.Update(bill);
            await _unitOfWork.Complete();
            return Ok(bill);
        }


        [HttpPost("saveDeposit")]
        public async Task<ActionResult> SaveBillDeposit(BillDepositDto billDepositDto)
        {
            var bill = _mapper.Map<DepositBill>(billDepositDto);
            _unitOfWork.BillDepositRepository.Update(bill);


            await _unitOfWork.Complete();
            return Ok(bill);
        }
    }
}
