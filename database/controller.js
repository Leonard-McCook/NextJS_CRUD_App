// Controller

export async function getUsers (req, res) {
    try {
        res.status(200).json({ user: "GET Request" })
    } catch (error) {
        res.status(404).json({ error: "An Error Ocurred While Trying to Fetch The Data" })
    }

}