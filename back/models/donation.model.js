module.exports = (sequelize, Sequelize) => {
    const Donation = sequelize.define("donation", {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        telephone: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.INTEGER
        },
        sport: {
            type: Sequelize.STRING
        }
    });

    return Donation;
}