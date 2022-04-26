
export default interface IUserRepository {

    list();

    findById(id);

    add(row);

    modify(id, row);

    remove(id);
    
}
