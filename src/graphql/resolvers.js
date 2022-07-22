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
}
module.exports = { Query, Mutation };



