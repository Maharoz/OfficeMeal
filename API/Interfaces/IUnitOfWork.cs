using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository UserRepository {get; }
        IMessageRepository MessageRepository {get;}
        ILikesRepository LikesRepository {get; }
        IBillRepository BillRepository { get; }
        IBillDepositRepository BillDepositRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}