import UserService from '../../domain/services/user-service';


export default class UserController {

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  get = async (req, res, next) => {
    this.userService.list()
      .then(data => {
        res.send(data)
      })
      .catch(next)
  }

  getById = async (req, res, next) => {
    const id = req.params.id;
    this.userService.findById(id)
      .then(row => {
        res.send(row)
      })
      .catch(next)
  }

  post = async (req, res, next) => {
    this.userService.add(req.body)
      .then(row => {
        res.send(row)
      })
      .catch(next)
  }

  put = async (req, res, next) => {
    const id = req.params.id;
    this.userService.modify(id, req.body)
      .then(row => {
        res.send(row)
      })
      .catch(next)
  }

  delete = async (req, res, next) => {
    const id = req.params.id;
    this.userService.remove(id)
      .then(id => {
        res.send(id)
      })
      .catch(next)
  }

}
