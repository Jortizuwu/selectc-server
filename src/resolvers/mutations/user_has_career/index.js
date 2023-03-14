const brain = require('brain.js')

// Crea una nueva red neuronal
const neuralNetwork = new brain.NeuralNetwork({
  learningRate: 0.01,
  decayRate: 0.999
})

const { findCareerByName } = require('../../../helpers/career')
const { userHasCareerModel } = require('../../../models')

const data = [
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 3
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 9,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 0,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 1
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 6
    },
    output: { Física: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 5
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 0,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 8
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      naturaleza: 1,
      control: 1,
      teatro: 1,
      mecánica: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      administracion: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 3
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 9,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 0,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 1
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 6
    },
    output: { Física: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 5
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 0,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 8
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 6,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 5
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 6,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      negocios: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      electronica: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Química ': 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      negocios: 1,
      administracion: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 1
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 4,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      naturaleza: 1,
      mecánica: 1,
      comunicacion: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 1
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 1,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 2
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      enseñanza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 7
    },
    output: { Enfermería: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 8
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { Matemáticas: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 7
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 4,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 9
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 5,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 10
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 10
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 8
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 10
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 9
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      'Defensa y Seguridad': 5,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 8
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 7
    },
    output: { 'Licenciatura en informática': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      monotonia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 4
    },
    output: { 'Licenciatura en educación infantil': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 6,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { Biología: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      electronica: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { Biología: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 4
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 5
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 5
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 4
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 10,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 10,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en educación física recreación y deporte': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      control: 1,
      musica: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en lengua castellana': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 7,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 7,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      musica: 1,
      teatro: 1,
      comunicacion: 1,
      monotonia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en lenguas extranjeras con énfasis en inglés': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 6,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 8,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 9,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 6,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 8,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 8,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 5
    },
    output: { 'Licenciatura en ciencias sociales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 1
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 6,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en ciencias naturales y educación ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      mecánica: 1,
      monotonia: 1,
      electronica: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Mecánica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 10,
      'Ingeniería e Informática': 8
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      mecánica: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 10,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería Industrial': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 1,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 9
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      oficina: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 10
    },
    output: { 'Ingeniería de Sistemas': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 8,
      'Ingeniería e Informática': 4
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 3
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 3,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 3
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 3
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 3
    },
    output: { 'Administración en Salud': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 4,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 8,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 5,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 5
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 4
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 6
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 4
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 10,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 4
    },
    output: { Estadística: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 7
    },
    output: { 'Ingeniería Ambiental': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 5
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 5
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 3,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 10,
      'Medicina y Ciencias de la Salud': 7,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 5,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 6
    },
    output: { 'Ingeniería Agronómica': 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 3,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      enseñanza: 1,
      'aire libre': 1,
      naturaleza: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 7,
      'Medicina y Ciencias de la Salud': 4,
      'Profesiones Humanísticas y Sociales': 9,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 1
    },
    output: { Geografía: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 0,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 8,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 0,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 0,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 1
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 10,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 1,
      'Ingeniería e Informática': 2
    },
    output: { Bacteriología: 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 5
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 6,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 0,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 5
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 5
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 5
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      'aire libre': 1,
      naturaleza: 1,
      oficina: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      ciencia: 1,
      administracion: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 5,
      'Medicina y Ciencias de la Salud': 9,
      'Profesiones Humanísticas y Sociales': 2,
      'Actividades Artísticas': 1,
      'Profesiones Administrativas y Contables': 7,
      'Ingeniería e Informática': 6
    },
    output: { 'Tecnología en farmacia': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 6
    },
    output: { Física: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 6
    },
    output: { Física: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 8,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 7
    },
    output: { Física: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 6
    },
    output: { Física: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      oficina: 1,
      economía: 1,
      control: 1,
      comunicacion: 1,
      monotonia: 1,
      negocios: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 9,
      'Medicina y Ciencias de la Salud': 3,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 6,
      'Ingeniería e Informática': 6
    },
    output: { Física: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 10,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 0,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 1
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 9,
      'Ciencias Puras, Agrarias, Medio Ambientales': 3,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 0,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 1
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 10,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 0,
      'Actividades Artísticas': 2,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 2
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 10,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 0,
      'Actividades Artísticas': 3,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 1
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      monotonia: 1,
      'aire libre': 1,
      control: 1,
      comunicacion: 1,
      administracion: 1,
      colaborador: 1,
      economía: 1,
      'Defensa y Seguridad': 9,
      'Ciencias Puras, Agrarias, Medio Ambientales': 4,
      'Medicina y Ciencias de la Salud': 1,
      'Profesiones Humanísticas y Sociales': 1,
      'Actividades Artísticas': 4,
      'Profesiones Administrativas y Contables': 4,
      'Ingeniería e Informática': 2
    },
    output: { Derecho: 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 10,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 5,
      'Actividades Artísticas': 10,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 1,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 4,
      'Actividades Artísticas': 10,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 2
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      'aire libre': 1,
      oficina: 1,
      economía: 1,
      musica: 1,
      comunicacion: 1,
      ciencia: 1,
      colaborador: 1,
      'Defensa y Seguridad': 2,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 2,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 8,
      'Profesiones Administrativas y Contables': 2,
      'Ingeniería e Informática': 3
    },
    output: { 'Licenciatura en música': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      naturaleza: 1,
      control: 1,
      teatro: 1,
      mecánica: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      administracion: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 2
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      naturaleza: 1,
      control: 1,
      teatro: 1,
      mecánica: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      administracion: 1,
      'Defensa y Seguridad': 6,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 3
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      naturaleza: 1,
      control: 1,
      teatro: 1,
      mecánica: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      administracion: 1,
      'Defensa y Seguridad': 8,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 9,
      'Ingeniería e Informática': 3
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      naturaleza: 1,
      control: 1,
      teatro: 1,
      mecánica: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      administracion: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 5,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 10,
      'Ingeniería e Informática': 2
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  },
  {
    input: {
      analisis: 1,
      enseñanza: 1,
      construccion: 1,
      naturaleza: 1,
      control: 1,
      teatro: 1,
      mecánica: 1,
      monotonia: 1,
      negocios: 1,
      electronica: 1,
      administracion: 1,
      'Defensa y Seguridad': 7,
      'Ciencias Puras, Agrarias, Medio Ambientales': 2,
      'Medicina y Ciencias de la Salud': 6,
      'Profesiones Humanísticas y Sociales': 6,
      'Actividades Artísticas': 9,
      'Profesiones Administrativas y Contables': 10,
      'Ingeniería e Informática': 2
    },
    output: { 'Admón. en finanzas y negocios internacionales': 1 }
  }
]

console.log(data.length)

neuralNetwork.train(
  data,
  {
    errorThresh: 0.005, // umbral de error
    iterations: 20000, // número de iteraciones
    log: true, // mostrar información de entrenamiento
    logPeriod: 10 // mostrar información cada 100 iteraciones
  }
)

const userHasCareerMutations = {
  addCareerToUser: async (args, context) => {
    // Utiliza la red neuronal entrenada para predecir qué carrera universitaria debería estudiar una persona
    // basada en sus intereses
    console.log({ args: args.data })
    const userData = {}
    args.data.forEach((element) => {
      userData[element.name] = element.value
    })
    const prediction = neuralNetwork.run(userData)
    console.log(prediction)
    const uwu = Object.entries(prediction)
    await Promise.all(
      uwu.map(async (val) => {
        const { careerID } = await findCareerByName(val[0])
        await userHasCareerModel.create({
          uid: context.currentUser.uid,
          careerID,
          coincidenceValue: val[1]
        })
      })
    )
    return {
      code: 200,
      success: true,
      message: 'career add to user'
    }
  },

  deleteCareerToUser: async (context) => {
    await userHasCareerModel.destroy({
      where: {
        uid: context.currentUser.uid
      }
    })

    return {
      code: 200,
      success: true,
      message: 'careers deletes user'
    }
  }
}

module.exports = userHasCareerMutations
