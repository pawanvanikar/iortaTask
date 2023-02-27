const logoutUser = async (req, res) => {
    try {
        res.status(200).cookie('cookie', "", {
            expires: new Date(new Date().getTime() + 1000),
            httpOnly: true
        }).json({ messaage: "Log out successfull" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = { logoutUser }