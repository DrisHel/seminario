const { alunos, cursos, professores } = require('../models');


const Query = {
    todosAlunos: async () => {
        const aluno = await alunos.findAll()

        return aluno
    },
    todosCursos: async () => {
        const curso = await cursos.findAll()

        return curso
    },

    todosProfessores: async () => {
        return await professores.findAll()
    }

}

const Mutation = {
    createAluno: async (root, { Nome, Sobrenome, Email }) => {
        try {
            await alunos.create({ Nome, Sobrenome, Email })
            return "create user"
        } catch (error) {
            console.log(error)
        }

    },

    createCurso: async (root, { Nome }) => {
        try {
            await cursos.create({ Nome })
            return "create Curse"
        } catch (error) {
            console.log(error)
        }

    },

    createProfessores: async (root, { Nome, Sobrenome, Email, Matricula }) => {
        try {
            await professores.create({ Nome, Sobrenome, Email, Matricula })
            return "create Professor"
        } catch (error) {
            console.log(error)
        }

    },

    updateAluno: async (root, { id, Nome, Sobrenome, Email }) => {
        try {
            await alunos.update({ Nome, Sobrenome, Email }, {
                where: { id }
            })
            return "update user"
        } catch (error) {
            console.log(error)
        }
    },

    updateCurso: async (root, { id, Nome }) => {
        try {
            await cursos.update({ Nome }, {
                where: { id }
            })
            return "update curso"
        } catch (error) {
            console.log(error)
        }
    },

    updateProfessores: async (root, { id, Nome, Sobrenome, Email, Matricula }) => {
        try {
            await professores.update({ Nome, Sobrenome, Email, Matricula }, {
                where: { id }
            })
            return "update Professor"
        } catch (error) {
            console.log(error)
        }
    },


    deleteProfessores: async (root, { id }) => {
        try {
            await professores.destroy({ where: { id } })

            return "Deletado Professor"
        } catch (error) {
            console.log(error)
        }
    },

    deleteCurso: async (root, { id }) => {
        try {
            await cursos.destroy({ where: { id } })

            return "Deletado Curso"
        } catch (error) {
            console.log(error)
        }
    },

    deleteAluno: async (root, { id }) => {
        try {
            await alunos.destroy({ where: { id } })

            return "Deletado Aluno"
        } catch (error) {
            console.log(error)
        }
    },
}
module.exports = { Query, Mutation };



