const Author = {};

/**
 * Autoriaus irasymas i duomenu baze.
 * @param {Object} connection Objektas, su kuriuo kvieciame duombazes mainpuliavimo metodus.
 * @param {string} authorFirstname Autoriaus vardas.
 * @param {string} authorLastname Autoriaus pavarde.
 * @returns {Promise<string>} Tekstas, apibudinantis, koks autorius buvo irasytas i duomenu baze.
 */
Author.create = async (connection, authorFirstname, authorLastname) => {
    const sql = 'INSERT INTO `authors` \
                    (`id`, `firstname`, `lastname`) \
                VALUES (NULL, " '+ authorFirstname + ' ", "' + authorLastname + '")';
    const [rows] = await connection.execute(sql);
    const respond = `${authorFirstname} ${authorLastname} buvo sekmingai irasytas!`;

    // console.log(respond);
    return respond;

}

Author.listAll = async (connection) => {
}

Author.findById = async (connection, authorId) => {
}

Author.findByFirstname = async (connection, authorFirstname) => {
}

Author.findByLastname = async (connection, authorLastname) => {
}

Author.updatePropertyById = async (connection, authorId, propertyName, propertyValue) => {
}

Author.delete = async (connection, authorId) => {
}

module.exports = Author;