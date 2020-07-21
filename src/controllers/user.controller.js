
function UserController()
{
    this.find = function (req, res)
    {
        res.send("find")
    }
    this.add = function (req, res)
    {
        res.send("add")
    }


    return this;
}

module.exports = UserController();