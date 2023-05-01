-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 01, 2023 at 06:58 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `selectc`
--
CREATE DATABASE IF NOT EXISTS `selectc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `selectc`;

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activityID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_icelandic_ci;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`activityID`, `name`, `createdAt`, `updatedAt`) VALUES
('21d2256c-5275-4421-8092-9e4058b5419c', 'Defensa y Seguridad', '2023-03-15 00:24:02', '2023-03-15 00:24:02'),
('3e926b68-5300-4a25-80e6-60181b16b8c9', 'Ciencias Puras, Agrarias, Medio Ambientales', '2023-03-15 00:24:02', '2023-03-15 00:24:02'),
('5384ddf6-51ea-48f1-a67e-8a00f929e4e5', 'Medicina y Ciencias de la Salud', '2023-03-15 00:26:14', '2023-03-15 00:26:14'),
('5613a5dd-91fa-4715-87fb-e2a44fbbe770', 'Profesiones Humanísticas y Sociales', '2023-03-15 00:28:39', '2023-03-15 00:28:39'),
('756a5522-efbc-41ac-ac4c-c9c80af7b60c', 'Actividades Artísticas', '2023-03-15 00:28:39', '2023-03-15 00:28:39'),
('bf9d75b8-1083-41e8-8869-3a01513ced63', 'Profesiones Administrativas y Contables', '2023-03-15 00:28:39', '2023-03-15 00:28:39'),
('ff5b5f92-7ca0-4693-baa7-2fa61c50bcb8', 'Ingeniería e Informática', '2023-03-15 00:28:39', '2023-03-15 00:28:39');

-- --------------------------------------------------------

--
-- Table structure for table `career`
--

CREATE TABLE `career` (
  `careerID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `matters` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `career`
--

INSERT INTO `career` (`careerID`, `name`, `description`, `matters`, `duration`, `createdAt`, `updatedAt`) VALUES
('00eb7b75-135f-462f-8582-1f9a0da6155b', 'Tecnologia en Regencia y Farmacia', 'El Tecnólogo en Regencia de Farmacia egresado de la Universidad de Córdoba es un profesional que está capacitado para ser:\n\nUn profesional con una formación integral, con alta calidad comunicativa y científica- Tecnológica que contribuye a su desarrollo como persona autónoma y crítica, que interactúa creativa y constructivamente con la comunidad.\nUn profesional con dominio conceptual y procedimental de su saber específico, que le permite implementar metodologías y procesos para el ejercicio de la profesión.\nUn profesional con sensibilidad social, comprometido con los problemas del área de la salud, con capacidad de trabajo en equipo y actitud para el reconocimiento y valoración de sí mismo y de los demás, en un clima de pluralismo, tolerancia, concertación, gestión y toma de decisiones.\nUn profesional con sentido ético del ejercicio de su profesión, responsabilidad gremial, científica y social, respetuosa de su cultura y la de los demás.', 56, 5, '2023-03-14 23:45:35', '2023-03-14 23:45:35'),
('07772804-1335-4357-9dfc-979cd1172b4d', 'Derecho', 'El abogado debe basar el ejercicio de su profesión en algunos pilares fundamentales si quiere ayudar a solucionar problemas legales a sus clientes. Debe tener un profundo conocimiento de la ley y un gran sentido de la equidad y de la justicia.\n\nEl perfil profesional de un abogado tiene que contar con habilidades, destrezas y aptitudes que le permitan desarrollar su labor con altas dosis de calidad y eficiencia. Hay que tener en cuenta que las personas buscan soluciones y no más problemas. Por ello, es fundamental un continuo aprendizaje y aumento de conocimientos para ejercer la profesión con solvencia.\n\nPara finalizar, y no menos importante, un abogado deberá respetar su código ético, tener una conducta apropiada con las instituciones, demás colegas de profesión y con sus clientes, además de intentar conseguir el mejor resultado posible para estos últimos.', 54, 5, '2023-03-14 23:45:54', '2023-03-14 23:45:54'),
('1c8ad240-b60a-493a-9834-b002d1b51f42', 'Licenciatura en Educacion Artistica', 'El Licenciado en Educación Artística es un profesional integral capaz de desarrollar, con solvencia y conocimiento, un trabajo interdisciplinario, artístico, musical, pedagógico e investigativo, y demuestra compromiso con la preservación y divulgación del patrimonio cultural de la región y el país', 54, 5, '2023-03-14 23:47:10', '2023-03-14 23:47:10'),
('1f6426ca-9ca6-40d1-b7bf-f08ce59ec1e6', 'Administracion en Finanzas y Negocios Internacionales', 'El Perfil Profesional del Matemático egresado de la Universidad se caracteriza por ser:\n\nUn profesional capaz de aplicar los conocimientos propios del Análisis Matemático, El Álgebra, La Topología, La Geometría y Matemática Aplicada, para que se desempeñe eficazmente tanto en la investigación, la docencia universitaria, asesoría técnica y la solución de problemas que surjan de la matemática, ciencias, ingenierías y del entorno.\nUn profesional con alta formación Matemática para que resuelva problemas de los sectores de producción, donde se diseñan modelos matemáticos para representar fenómenos inherentes a los procesos de desarrollo e innovación.\nUn profesional idóneo, con capacidad crítica, reflexiva, pensamiento integrador y trabajo en equipo, con sentido humanista, conciliador y tolerante, comprometido con el desarrollo y el mejoramiento de la calidad de vida de la región y del país.', 54, 5, '2023-03-14 23:47:40', '2023-03-14 23:47:40'),
('4159e312-4b45-4258-9b92-69824a6270eb', 'Ingeniería Mecánica', 'El Ingeniero Mecánico de la Universidad de Córdoba se identifica por:\n\nHumanista, conciliador y tolerante, con compromiso, madurez, conciencia ambiental, juicio recto, sentido de las proporciones, respetuoso de los derechos humanos, solidario y demócrata, disciplinado y metódico para que responda positivamente a las actuales circunstancias del país e inspire confianza ante la sociedad.\nSer un profesional de las ingenierías con habilidades para la interpretación y solución de problemas.\nParticipa en programas de investigación en el campo de la Ingeniería Mecánica que contribuyan en el desarrollo de la región y del país.\nEstar capacitado para la selección de materiales, al igual que para el diseño, calculo, construcción y mantenimiento de elementos y equipos mecánicos, fluidos y térmicos.\nCapacitado para tecnificar la pequeña, mediana y grande empresa de nuestra región lo que permitiría fortalecerla y hacerla eficiente, facilitando así su adaptación en el contexto nacional e internacional.\nCreativo e innovador que responda y se adapte a la dinámica y permanentes cambios tecnológicos, apropiándose de los nuevos conocimientos que sean aplicables a la región y a las organizaciones en general.\nLíder, con capacidad integradora para organizar equipos de alto rendimiento con profesionales de otras disciplinas, en la búsqueda de soluciones prácticas y de conjunto que redunde en beneficio de la colectividad.', 58, 5, '2023-03-14 23:46:31', '2023-03-14 23:46:31'),
('43dbc776-af6a-4624-96c7-db1d6f3e35c5', 'Licenciatura en ciencias naturales y educación ambiental', 'Se espera que el licenciado en Ciencias Naturales y Educación Ambiental pueda:\n\nAplicar los postulados conceptuales, epistemológicos y metodológicos de la biología, la química, la física y la educación ambiental desde la comprensión de los fundamentos pedagógicos y didácticos en los procesos de enseñanza y aprendizaje.\nDiseñar estrategias educativo-ambientales para el fortalecimiento de la formación integral en diversos contextos, basados en su capacidad reflexiva y operativa de las dimensiones del conocimiento profesional.\nDiseñar planes de estudio, cursos, proyectos y programas de investigación, extensión y productivos asociados a los campos pedagógicos, didácticos y disciplinares de las Ciencias Naturales y la Educación Ambiental.\nLiderar procesos de Educación ambiental formal, no formal e informal, dinamizando estrategias para promover cultura ambiental a partir de Proyectos Ambientales Escolares (PRAE), Proyectos Ciudadanos de Educación Ambiental (PROCEDA) y Comités Técnicos Interinstitucionales de Educación Ambiental (CIDEA) con proyección social e intervención en contextos socioculturales e institucionales, del orden local, regional, nacional e internacional.\nParticipar en la gestión escolar, la planeación de programas y proyectos para la mejora continua de los procesos académicos e institucionales en correspondencia con las políticas educativas, las buenas prácticas de organización y construcción de escenarios de la administración escolar que posibilite resignificar su práctica pedagógica educativa.\nTrabajar de manera colaborativa e interdisciplinaria en el desarrollo de proyectos educativos, ambientales y sociales, estableciendo relaciones de cooperación e impulsando procesos democráticos y de participación ciudadana, que permitan la convivencia armónica y el respeto por la diversidad orientados al mejoramiento la calidad de vida.\nComunicar los resultados de procesos formativos, de investigación e innovación pedagógica haciendo uso de las tecnologías de la información y la comunicación para fortalecer su desempeño profesional en contextos regionales, nacionales e internacionales.', 56, 5, '2023-03-14 23:46:36', '2023-03-14 23:46:36'),
('44a30f15-af9a-43b1-9ce9-b3aadf6f3cd2', 'Ingeniería Agronómica', 'El Ingeniero Agrónomo está capacitado para desempeñarse eficientemente en entidades estatales, organizaciones no gubernamentales, empresas privadas o en actividades productivas o administrativas particulares, en el campo del desarrollo agrícola del país, en aspectos relacionados con la investigación, extensión, producción de bienes y servicios derivados de la agricultura, docencia, organización de productores rurales y grupos de trabajo comunitario, gestión agroempresarial (administración de fincas, avalúos, registros, costos de producción, organización de empresas), comercialización de insumos y otras disciplinas complementarias derivadas de su formación integral.', 55, 5, '2023-03-14 23:46:10', '2023-03-14 23:46:10'),
('46b84a97-9b2b-406e-bdf4-d62d4ba57a07', 'Geografía', 'Un profesional con una formación integral, con alta calidad comunicativa y científicatecnológica que contribuye a su desarrollo como persona autónoma y crítica, que interactúa creativa y constructivamente con el mundo y con la naturaleza', 54, 5, '2023-03-14 23:46:05', '2023-03-14 23:46:05'),
('68afa116-96dc-4ca5-bfd4-5cc3297baf6c', 'Medicina Veterinaria y Zootecnia', NULL, 61, 5, '2023-03-21 00:58:57', '2023-03-21 00:58:57'),
('6d716c5a-4980-4a43-adfc-ecf2fae1eb06', 'Física', 'Comprende las leyes y principios fundamentales de las diferentes ramas de la Física y los aplica en el análisis y la solución de problemas relacionados con el comportamiento de los sistemas físicos en diferentes campos de la Física.\nAplica las leyes y principios fundamentales de la Física en la solución de problemas del entorno mediante la proposición y elaboración de modelos físicos.\n Comprende conceptos matemáticos fundamentales y los aplica en la construcción de modelos físicos que permitan la solución de problemas relacionados con el comportamiento de los sistemas físicos.\nAplica herramientas de modelación matemática en la solución de problemas físicos mediante el uso de diferentes lenguajes de programación computacional.\nParticipa en grupos de investigación en la elaboración y desarrollo de proyectos de investigación en diferentes líneas de investigación física, en especial en: Síntesis y caracterización de materiales, Física Médica, Física Ambiental, Astrofísica, Información cuántica y el diseño y construcción de sistemas de medición.\nComunica adecuadamente de forma oral y escrita, los resultados obtenidos a partir del desarrollo de proyectos de investigación en los que haya participado en los diferentes campos de la física y en especial en: Síntesis y caracterización de materiales, Física Médica, Física Ambiental, Astrofísica, Información cuántica y el diseño y construcción de sistemas de medición.\nLee, comprende y escribe literatura científica en idioma inglés.\nConoce y comprende claramente los valores, principios éticos y las normas de convivencia de la sociedad y los pone en práctica.', 56, 5, '2023-03-14 23:46:00', '2023-03-14 23:46:00'),
('7ade3094-134a-49de-ad6e-ee4165905c9f', 'Licenciatura en informática', 'Diseña ambientes educativos, mediados por tecnología, orientados a resolver necesidades de aprendizaje en contexto.\nGestiona y lidera cambios educativos a través de la investigación, enseñanza y aprendizaje de las tecnologías, contribuyendo al mejoramiento de la calidad de la educación.\nUtiliza responsablemente las tecnologías encaminadas al fortalecimiento de los procesos de desarrollo educativo, social, económico, político, cultural; asumiendo una postura ética en el trabajo individual y colectivo.\nEvalúa la eficacia de los ambientes educativos, recursos tecnológicos, y modelos, que se aplican a la enseñanza, aprendizaje, y desarrollo humano de los estudiantes.\nAplica conocimientos, habilidades, y criterios en la resolución de problemas complejos presentes en ecosistemas educativos mediados por tecnología desde una perspectiva de cambio e innovación.\nAplica de manera integrada los fundamentos de la psicología del aprendizaje, la pedagogía y la tecnología educativa para la gestión didáctica de los ambientes de enseñanza – aprendizaje en coherencia con los nuevos desafíos.\nDomina conceptual y en forma práctica los conceptos relacionados con la programación de computadores, especialmente aquellos orientados al ámbito educativo y basados en tecnologías web modernas.\nDirige o hace parte de equipos interdisciplinarios para el trabajo colaborativo en el desarrollo de recursos educativos, objetos virtuales, video juegos educativos o software educativo teniendo en cuenta criterios pedagógicos, didácticos, estéticos, tecnológicos, ingenieriles y de usabilidad.\nConoce las bases de las tecnologías modernas asociadas a la IV Revolución Industrial como la inteligencia artificial, la robótica, el internet de las cosas, la computación en la nube, entre otras, especialmente aplicadas a los contextos educativos.\nPropone el uso de modelos de gestión organizacional y tecnológica que responden a las necesidades de las instituciones educativas. Teniendo en cuenta las políticas nacionales educativas y las mega tendencias globales.\nLidera equipos de trabajo de alto rendimiento aprovechando eficientemente los talentos, los recursos, las capacidades, habilidades y destrezas en la solución de problemas organizacionales.\nDinamiza los contextos educativos y organizacionales mediante la aplicación de soluciones tecnológicas innovadoras a partir de políticas nacionales y referentes internacionales en el ámbito de gestión TIC.\nFormula planes estratégicos en organizaciones educativas a partir de la generación de escenarios de futuro con metodologías que respondan a los requerimientos y apuesta de la organización.\nPlanea y realiza producciones audiovisuales en imagen, animación, fotografía, radio y audiovisuales con uso de herramientas modernas, criterio estético y un enfoque de comunicación adecuado, aplicados a la industria, la educación o las redes sociales.\nAplica procedimientos pedagógicos, articulando de manera coherente el modelo pedagógico y didáctico, el currículo, la evaluación y la gestión escolar, con las necesidades de aprendizaje identificadas en el aula.\nReflexiona sobre el quehacer educativo a partir del dominio y la sistematización de la teoría y la práctica pedagógica, tomando como referente las diversas realidades socioculturales del contexto, la escuela, el aula, la enseñanza y las capacidades diversas de los educandos.\nFormula y desarrolla proyectos de investigación formativa haciendo uso de las tecnologías de la información y la comunicación a través de espacios de\ninterlocución con diferentes actores educativos del programa y de comunidades académicas locales, regionales, nacionales e internacionales.\nLidera programas y proyectos educativos, pedagógicos y didácticos para incidir en la formulación y mejoramiento de políticas y procesos innovadores e inclusivos con uso de las tecnologías de la información y la comunicación para la transformación digital de la educación', 51, 5, '2023-03-14 23:47:26', '2023-03-14 23:47:26'),
('7caf30b8-b316-4f3b-a36a-76b3d0b5a93a', 'Ingeniería Industrial', 'Un profesional competitivo con fundamentos sólidos en ciencias básicas, gestión de operaciones, administración y finanzas, para aplicar habilidades en la organización y dirección de empresas de bienes y servicios que le permita diseñar, mejorar y dirigir procesos y recursos.\n\nPERFIL OCUPACIONAL\n\nGestión Logística\n\nPlanear, programar, controlar y optimizar procesos en la elaboración de bienes y servicios.\nHacer estudios de métodos y procedimientos en las diferentes áreas de la empresa.\nDiseñar y administrar sistemas de abastecimiento, de producción, de comercialización y distribución de bienes y servicios.\nSistemas Integrados de Gestión\n\nDiseñar, implementar y mantener Sistemas de Gestión en Calidad, Medio Ambiente y Seguridad y Salud en el Trabajo.\nIdentificar, evaluar y diseñar planes para la gestión de riesgos.\nCrear, implementar y mejorar los indicadores de gestión que permitan medir la eficiencia, eficacia y el impacto de los distintos procesos de la empresa.\nFinanzas y mercadeo\n\nIdentificar comportamientos actuales y nuevas tendencias de mercados y productos.\nDiseñar, procesar y analizar la información financiera para la toma de decisiones.\nElaborar presupuestos y planes de ventas\nAnalizar alternativas de inversión e indicadores económicos y financieros.\nDiseño, evaluación y gerencia de proyectos\n\nRealizar y evaluar estudios de viabilidad de mercado, técnica, organizacional, financiera, de impactos (económico, ambiental y social).\nGerenciar proyectos productivos de carácter público y privado.\nLiderar proceso de creación de nuevas empresas de bienes y servicios que contribuyan al desarrollo de la región.', 69, 5, '2023-03-14 23:46:26', '2023-03-14 23:46:26'),
('7cb590c0-3d17-41a3-97af-605d3303fd76', 'Licenciatura en educación infantil', 'Organiza, diseña, desarrolla y evalúa distintas estrategias didácticas que promueven el aprendizaje y atienden las necesidades diversas y de formación integral de los niños y niñas.\nUtiliza estrategias y prácticas de evaluación coherentes con las necesidades de aprendizaje y las necesidades de la población diversa y vulnerable.\nDemuestra relaciones armónicas y dialógicas con sus estudiantes, con sus colegas y con la comunidad en general.\nDesarrolla valores de sensibilidad social para promover procesos de convivencia escolar, familiar y de solución de conflictos.\nDesarrolla habilidad para investigar e intervenir en procesos educativos y pedagógicos sobre problemas del desarrollo infantil y las condiciones de vida de la familia y la comunidad que rodea al niño.\nGestiona y promueve programas de proyección social y de atención a las oportunidades de desarrollo del niño o la niña, en la perspectiva de transformar el contexto físico y social en beneficio del aprendizaje y desarrollo infantil.\nComprende la realidad educativa, social, política, económica, cultural, histórica, legal y familiar de la infancia colombiana y, en especial, de la región Caribe y del departamento de Córdoba.\nDesarrolla una sólida formación ética, social y humanística, para aplicar sus conocimientos con un gran sentido de compromiso con el desarrollo regional, vinculando a la Universidad con el sector productivo, especialmente, en la promoción del desarrollo de la infancia, la familia y las comunidades.', 52, 5, '2023-03-14 23:47:20', '2023-03-14 23:47:20'),
('81722983-e685-41c0-ba11-c98962a6bafc', 'Administración en Salud', 'El perfil profesional del Administrador en Salud de la Universidad de Córdoba, se sustenta básicamente en el concepto propio de la Administración, es decir, la implementación del proceso administrativo, la toma de decisiones, la identificación y solución de problemas del entorno, la generación de estrategias de distinta índole que hacen competitivas a las organizaciones del sector Salud Público y Privado, el manejo de la incertidumbre y la promoción del desarrollo de la comunida', 54, 5, '2023-03-14 23:45:40', '2023-03-14 23:45:40'),
('828be875-8795-428f-85fc-f58e632bd847', 'Licenciatura en Literatura y Lengua Castellana', 'El egresado de la Licenciatura en Literatura y Lengua Castellana es un profesional que:\n\nOrienta procesos formativos en el área de Humanidades – Lengua Castellana en los niveles de educación básica y media, con base en fundamentos epistemológicos de la lingüística, la literatura y la pedagogía del lenguaje.\nLidera procesos de gestión artística y cultural que promueven la lectura crítica y creativa desde lo ético político, lo estético y lo sociocultural en contextos escolares y de promoción social a nivel local, regional, nacional y global.\nDiseña, ejecuta y evalúa proyectos de investigación formativa interdisciplinaria de acuerdo con las teorías y tendencias pedagógicas actuales para la formación de ciudadanos críticos desde la enseñanza de la lengua y la literatura.\nDiseña, ejecuta y evalúa talleres de didáctica de la lectura, la escritura y la literatura.\nDirige talleres de escritura creativa.\nDirige proyectos editoriales que incluye la labor básica de corrección de estilo.\nParticipa en proyectos etnoeducativos y de alfabetización.', 54, 5, '2023-03-14 23:47:04', '2023-03-14 23:47:04'),
('8c5c7cf8-ef92-4848-884b-883fe7e0d904', 'Acuicultura', 'Desde los fundamentos y pertinencia del currículo del Programa de Acuicultura de la Universidad de Córdoba, el egresado estará en capacidad de desempeñarse como:\n\nInvestigador en institutos, universidades, empresas pecuarias y centro de investigación en las áreas de la producción y transformación de productos acuícola.\nGerencia en la producción de semilla, biomasa y/o reproductores en empresas acuícolas.\nLíder en gestión, creación, innovación y transformación de empresas acuícolas.\nAsesor en diseño y construcción de empresas acuícolas.\nPlanificador y ejecutor de proyectos de desarrollo del sector agropecuario de explotación en piscicultura, carcinocultura, malacocultura, en instituciones del sector agropecuario.\nPromotor y ejecutor de planes y programas de repoblamiento de sistemas naturales y/ o artificiales.', 65, 5, '2023-03-14 22:47:07', '2023-03-14 22:47:07'),
('99bc5b7e-9541-458d-8949-4f1ee521c296', 'Bacteriologia', ' Un profesional con una formación integral, con alta calidad comunicativa y científicatecnológica que contribuye a su desarrollo como persona autónoma y crítica, que interactúa creativa y constructivamente con el mundo y con la naturaleza.\nUn profesional con dominio conceptual y procedimental de su saber específico, que le\npermite implementar metodologías y procesos para el ejercicio de la profesión y el desarrollo de la investigación geográfica.\nUn profesional con sensibilidad social, comprometido con los problemas del entorno, con capacidad de trabajo en equipo y actitud para el reconocimiento y valoración de si mismo y de los demás, en un clima de pluralismo, tolerancia, concertación, gestión y toma de decisiones.\nUn profesional con sentido ético del ejercicio de su profesión, responsabilidad gremial, científica y social, respetuoso de su cultura y la de los demás y comprometido con la defensa y exaltación de los valores patrimoniales de la humanidad.\nEl ámbito temático sobre el cual opera la geografía contemporánea es indudablemente muy amplio, por cuanto su objeto de estudio abarca fenómenos tanto físicos – biótico, como socioculturales, en términos de su espacialidad. Las posibilidades de investigación y de ejercicio profesional del geógrafo son tan vastas como su perfil ocupacional real y potencial. En tal sentido se han definido las COMPETENCIAS que el Programa, de formación académica en Geografía desarrolla en los estudiantes que acuden a esta formación profesional.', 64, 5, '2023-03-14 23:45:25', '2023-03-14 23:45:25'),
('a4997687-0957-4200-8a3f-8fa1d8f37678', 'Licenciatura en Lengua Extrangera con Enfasis en Ingles', 'El Licenciado en Educación Física Recreación y Deportes egresado de la Universidad de Córdoba, es un profesional que demuestra, identifica y aplica conceptos, procedimientos y actitudes de su campo de saber pedagógico y disciplinar:\n\nImplementa programas intencionados de promoción y prevención de la salud, atendiendo la estructura anatómica, funcional y orgánica del cuerpo humano a lo largo de la vida para satisfacer las necesidades axiológicas y existenciales en diferentes contextos educativos y comunitarios.\nDemuestra dominio conceptual, procedimental y actitudinal en el ejercicio de su práctica profesional, fundamentado en las teorías tradicionales y emergentes, la investigación educativa y pedagógica de la enseñanza y el aprendizaje de la educación física la recreación y el deporte, en el ámbito escolar y académico.\nAdministra, gestiona y evalúa procesos curriculares, deportivos, recreacionales, atendiendo normas de calidad y mejoramiento continuo en escenarios de desempeño profesional.\nDemuestra liderazgo, asumiendo actitud propositiva, autocrítica y cooperativa, en su desempeño personal y laboral; respondiendo con idoneidad profesional a las exigencias del entorno social y de la educación.\nGenera comunidades de profesionales desde la academia, investigación y proyección social, contribuyendo a la cohesión social, en un marco de inclusión, sana convivencia, desarrollo humano y paz.', 62, 5, '2023-03-14 23:47:15', '2023-03-14 23:47:15'),
('b7c25cf7-80c8-4066-a477-56f03bd8b12a', 'Ingeniería Ambiental', 'El estudiante del programa estará en capacidad de demostrar que:\n\nComprende los conocimientos de las ciencias básicas e ingeniería general y los aplica en el análisis, intervención y solución de problemas en diferentes contextos y campos de la Ingeniería Ambiental.\nDomina los conocimientos esenciales y fundamentales de la ingeniería aplicada para desarrollar investigaciones de aplicación técnica y científica en la solución de problemas ambientales\nFormula, diseña y políticas, estrategias y herramientas para que contribuyen a mejorar las condiciones ambientales del entorno natural y al mejoramiento de la calidad de vida de las comunidades\nDiseña, adapta y propone herramientas, técnicas y tecnologías para la prevención, control y mitigación de la contaminación en los diferentes componentes ambientales: aire, agua y suelo.\nAplica herramientas de modelación matemática para la gestión de calidad ambiental y evaluar el transporte de contaminantes en el aire, el agua y el suelo.\nDomina lo conceptual y procedimental para diseñar y gestionar estrategias de mitigación del riesgo y el cambio climático en diferentes contextos territoriales y actividades productivas.\nConoce los sistemas de información geográfica y herramientas de análisis espacial para la gestión ambiental del territorio que contribuyan a la mitigación o reducción de los impactos ambientales negativos.\nActitud sensible, ética, responsable y comprometida con el desarrollo sostenible y su influencia en la calidad de vida de las comunidades próximas y lejanas\nComunica de manera oral y escrita los conocimientos construidos a partir del desarrollo de proyectos de investigación e innovación en el campo de la ingeniería ambiental a diferentes grupos y audiencias en contextos disciplinares y socioculturales.', 65, 5, '2023-03-14 23:46:16', '2023-03-14 23:46:16'),
('b8474899-8210-4a9f-bada-57645f985444', 'Matemáticas', 'El Perfil Profesional del Matemático egresado de la Universidad se caracteriza por ser:\n\nUn profesional capaz de aplicar los conocimientos propios del Análisis Matemático, El Álgebra, La Topología, La Geometría y Matemática Aplicada, para que se desempeñe eficazmente tanto en la investigación, la docencia universitaria, asesoría técnica y la solución de problemas que surjan de la matemática, ciencias, ingenierías y del entorno.\nUn profesional con alta formación Matemática para que resuelva problemas de los sectores de producción, donde se diseñan modelos matemáticos para representar fenómenos inherentes a los procesos de desarrollo e innovación.\nUn profesional idóneo, con capacidad crítica, reflexiva, pensamiento integrador y trabajo en equipo, con sentido humanista, conciliador y tolerante, comprometido con el desarrollo y el mejoramiento de la calidad de vida de la región y del país.', 56, 5, '2023-03-14 23:47:31', '2023-03-14 23:47:31'),
('c356041e-1892-49d3-a80e-f1b93946dfd3', 'Estadistica', NULL, 62, 5, '2023-03-21 00:58:24', '2023-03-21 00:58:24'),
('c878fdfc-f2ef-4dbb-b5d3-a7753edb2edd', 'Química', 'El Químico de la Universidad de Córdoba tiene dentro de su formación, cumplir con un ciclo básico de contenidos no solo en química sino en otras áreas tales como la fundamentación científica y humanística. Tiene también la oportunidad de relacionarse con problemáticas especialmente del sector agropecuario, industrial, ambiental y minero, debido a que son las áreas de mayor alcance en el medio, haciendo durante toda la carrera especial énfasis en la formación de habilidades para la investigación científica que desarrollan en los diferentes grupos de investigación.\n\nEl profesional en Química de la Universidad de Córdoba debe estar en condiciones de desempeñarse eficazmente en: la industria química, la industria farmacéutica, laboratorios de investigación, laboratorios de análisis, laboratorios de biotecnología, industrias de alimentos, industrias ambientales, laboratorios de certificación de calidad en química, investigación, administración, docencia, gestión de laboratorios y sus procesos.\n\nPerfil Ocupacional\n\nEl profesional químico de la universidad de Córdoba debe estar en condiciones de desempeñarse eficazmente en:\n\nIndustria química\nIndustria farmacéutica\nLaboratorios de investigación\nLaboratorios de análisis\nLaboratorios de Biotecnología\nIndustrias de Alimentos.\nIndustrias Ambientales.\nLaboratorios de Certificación de calidad en química\nInvestigación.\nAdministración y gestión de laboratorios y sus procesos.', 57, 5, '2023-03-14 23:47:48', '2023-03-14 23:47:48'),
('d0a24d55-da93-47d4-8270-38f3b940944a', 'Ingeniería de Sistemas', 'El Ingeniero de Sistemas de la Universidad de Córdoba podrá desempeñarse en cualquier organización del sector público o privado incluyendo la venta de servicios, que requiera la creación o uso de tecnología de la información y las comunicaciones, así como de la administración de sus recursos. En todos los casos podrán ser actividades propias de nuestro profesional:\n\nEjercer con ética, responsabilidad profesional y compromiso social, su actividad como Ingeniero de Sistemas en el contexto local y global; teniendo en cuenta el impacto económico, social y ambiental de su actividad.\nDesarrollar actividades en el área de nuevas Tecnologías de la Información y la Comunicación (TIC); en la exploración, explotación y generación de conceptos aplicados a las ciencias de la computación, análisis e interpretación de datos.\nGestionar de manera eficiente los recursos informáticos de una organización participando y comunicándose efectivamente en equipos de trabajo.\nLiderar proyectos de desarrollos tecnológicos e innovaciones tecnológicas para mejorar la competitividad y la calidad de vida.\nDesarrollar software con las fortalezas técnicas, metodológicas y tecnológicas para la construcción y soporte de alta calidad, siguiendo estándares de la industria.\nDiseñar redes telemáticas, con fortalezas tecnológicas para su construcción bajo las normas y estándares internacionales.\nAplicar con idoneidad los saberes de la ingeniería de sistemas: planeación, modelamiento y desarrollo de software, almacenamiento, transporte y seguridad de la información con pertinencia y sentido ético.', 56, 5, '2023-03-14 23:46:21', '2023-03-14 23:46:21'),
('d15e65e2-e73d-470e-9ed6-6f864c041749', 'Ingenieria de Alimentos', NULL, 58, 5, '2023-03-21 00:55:35', '2023-03-21 00:55:35'),
('d8be6884-a8d6-49b5-93d6-c53f8338a2bc', 'Biología', 'El Biólogo egresado de la Universidad de Córdoba es un profesional que está capacitado para:\n\nActuar interdisciplinariamente para diagnosticar, analizar, sugerir y/o plantear soluciones en diferentes áreas dentro de las ciencias básicas y sus aplicaciones (biotecnología, ciencias agropecuarias, ciencias médicas, ambiental entre otras), no solo en la región Caribe, sino en el entorno nacional e internacional.\nSer competitivo en los diferentes campos del saber y con capacidad de realizar propuestas y programas de investigación y de extensión en aspectos biológicos de importancia para la sociedad.\nSer un líder, conviviendo con responsabilidad social, capaz de formar grupos de trabajo trans-disciplinarios, estableciendo mediante la práctica de su profesión vínculos con la comunidad, sector productivo privado y con instituciones del gobierno.\nPERFIL OCUPACIONAL\n\nLos profesionales egresados del Programa de Biología de la Universidad de Córdoba podrán desempeñarse en:\n\nEntidades, Institutos y Centros de Investigación (oficiales, privados o mixtos) Institutos de investigación universitaria, zoológicos, zoocriaderos, jardines botánicos, parques naturales entre otros.\nCorporaciones regionales e instituciones de servicios ambientales: Oficiales o privados, ONGs especializadas en investigación básica y aplicada, mediante asesorías y consultorías.\nLa industria, procesos biotecnológicos, industriales, agroindustriales, agroecología, control biológico, tratamiento de desechos y aguas residuales y contaminación ambiental.', 63, 5, '2023-03-14 23:45:50', '2023-03-14 23:45:50'),
('f4cd65a6-8639-4443-8a33-37ae8b2f86ef', 'Licenciatura Educacion Fisica, Recreacio y Deporte', 'El licenciado en Lenguas Extranjeras con Énfasis en Inglés demuestra dominio del saber pedagógico y del inglés como segunda lengua en el ejercicio de su profesión, con formación holística e investigativa encaminada a responder autónomamente a los problemas de su entorno y a sus necesidades de formación permanente, con alto sentido de pertenencia por su profesión, su contexto laboral y la sociedad. En términos específicos, nuestro licenciado podrá asumir los siguientes roles:\n\nUsuario avanzado del inglés en las cuatro habilidades comunicativas en nivel C1.\nDocente de inglés para los diferentes niveles y necesidades de formación del sistema educativo colombiano.\nInvestigador de procesos de aprendizaje y enseñanza del inglés en el aula como medio para crecer profesionalmente y mejorar la calidad de enseñanza de este idioma.\nLíder de procesos relacionados con la planeación, implementación y evaluación del currículo para la enseñanza del inglés.', 55, 5, '2023-03-14 23:46:56', '2023-03-14 23:46:56'),
('f988e042-9cb1-4e32-83c6-d4235fa49eb3', 'Enfermería', 'Está representado por todo el conjunto de saberes que debe manejar el egresado, guardando correspondencia con los perfiles ocupacionales. El perfil\nprofesional del Enfermero (a) egresado (a) de la Universidad de Córdoba se relaciona de manera directa con las áreas de formación, a saber: Clínica, Administración, Educación, Salud Colectiva e Investigación. En estas áreas el estudiante adquiere los conocimientos para desarrollar competencias en:\n\nSalud Preventiva\nTratamiento y rehabilitación\nSalud reproductiva y desarrollo humano\nAdministración y gerencia\nInvestigación\nEste profesional formado bajo los preceptos del PEP, se destaca el planeamiento y la ejecución de la atención de enfermería con el individuo, la familia, los grupos y la comunidad, en los diferentes escenarios y etapas del desarrollo humano. Con sus sujetos de cuidados directos establece una relación terapéutica entre el profesional de Enfermería y la persona usuaria, a través del cuidado que se les brinda.\n\nEn lo personal, posee actitudes y valores que le permiten reconocerse a sí mismos, y concebir a los otros como seres humanos únicos e irremplazables, que se desarrollan en continuo proceso de crecimiento personal, inmersos en un contexto cultural, social, económico, ambiental y político que modifican sus experiencias. Siempre respetando los principios de la bioética, que reflejan un entendimiento de los valores humanos, la diversidad cultural y los problemas actuales.', 56, 5, '2023-03-14 23:47:36', '2023-03-14 23:47:36'),
('fb4777c9-289c-4a03-b30f-685b0b7a1d1f', 'Licenciatura en Ciencias Sociales', 'la licenciatura en trabajo social consta de cuatro años de formación universitaria, para desarrollar el perfil profesional del trabajador social. Básicamente, el objetivo es adquirir los conocimientos y habilidades necesarios para evaluar, diagnosticar y proponer planes de solución a diversos problemas y conflictos sociales.', 65, 5, '2023-03-14 23:46:45', '2023-03-14 23:46:45');

-- --------------------------------------------------------

--
-- Table structure for table `preference`
--

CREATE TABLE `preference` (
  `preferenceID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `preference`
--

INSERT INTO `preference` (`preferenceID`, `name`, `createdAt`, `updatedAt`) VALUES
('01122ff1-0c42-4b20-913a-7280600af39d', 'analisis', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('0556669d-df07-4de6-8e02-cd170274f3ae', 'enseñanza', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('1ec5c69f-deb3-40a6-a9a2-6ed22e13f738', 'construccion', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('2de45732-c4d6-44ad-9a57-d7f296489c75', 'aire libre', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('33a0a463-8984-4162-8029-216b7b1c4a9b', 'naturaleza', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('4307caa5-f85d-4a5a-ac35-aeb184413e29', 'oficina', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('5c28a57f-5e3e-4f1c-a503-a10958173f50', 'economía', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('646af121-91cc-44a3-ad44-45df112d9249', 'control', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('66a466a6-b479-4abd-948c-f596bcee85a5', 'musica', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('7ee958f7-0343-4e2c-8ab2-1081ea1a1df8', 'teatro', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('8649025b-1bdf-4146-bc81-6b6271bf4ca3', 'mecánica', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('8b73bd99-1c3d-4673-96fe-10b335d57624', 'comunicacion', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('96742280-c9b9-415c-bead-1676a50ff6ac', 'monotonia', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('96be7631-545a-4644-8d81-3acdd694b9ac', 'negocios', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('9fb9cda2-1fa3-440a-b82f-6f7f6f2379b0', 'electronica', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('a3c06889-00cb-4fe6-9360-73b483dbb8af', 'ciencia', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('c90575ce-72e3-4002-aa28-76a1ccd2b10a', 'administracion', '2023-03-15 00:34:30', '2023-03-15 00:34:30'),
('cdde8106-e13d-494b-ba2a-147ce22fea1f', 'colaborador', '2023-03-15 00:34:30', '2023-03-15 00:34:30');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `roleID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`roleID`, `name`, `createdAt`, `updatedAt`) VALUES
('f2e1640d-c2b7-11ed-8f01-60f26226b24d', 'USER', '2023-03-14 23:30:38', '2023-03-14 23:30:38'),
('f2e17c05-c2b7-11ed-8f01-60f26226b94d', 'ADMIN', '2023-03-14 23:30:38', '2023-03-14 23:30:38');

-- --------------------------------------------------------

--
-- Table structure for table `school`
--

CREATE TABLE `school` (
  `schoolID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `school`
--

INSERT INTO `school` (`schoolID`, `name`, `createdAt`, `updatedAt`) VALUES
('df6dbc4f-31ee-4bad-a884-ba156aff1925', 'Institución Educativa Camilo Torres', '2023-03-30 14:37:55', '2023-03-30 14:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `statusID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `statusCode` varchar(30) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`statusID`, `statusCode`, `createdAt`, `updatedAt`) VALUES
('2c19e09a-c2b8-11ed-8f01-60f26226b9ad', 'ACTIVE', '2023-03-14 23:32:33', '2023-03-14 23:32:33'),
('2c19fc71-c2b8-11ed-8f01-60f26226b94d', 'INACTIVE', '2023-03-14 23:32:33', '2023-03-14 23:32:33');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `income` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `statusID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `schoolID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `name`, `lastName`, `email`, `password`, `age`, `gender`, `income`, `createdAt`, `updatedAt`, `roleID`, `statusID`, `schoolID`) VALUES
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'Jose', 'Ortiz', 'joseher2511@gmail.com', '$2a$10$vjHypj96TRaL2Q7IB7HYxuxeK8l9B3An.DRezkNMHGPdQfvOFrlJe', 11, '', 0, '2023-03-21 23:12:29', '2023-04-24 14:16:56', 'f2e17c05-c2b7-11ed-8f01-60f26226b94d', '2c19e09a-c2b8-11ed-8f01-60f26226b9ad', 'df6dbc4f-31ee-4bad-a884-ba156aff1925'),
('9b80f73a-b789-4a47-b9b1-64445bcf08c8', 'jojo', 'ortiz', 'jose@jose.com', '$2a$10$qXd4R7RsFl7fo9ET3YGIbeZRI4lshEDINE4VcHS8MyQX.gld2WEWu', NULL, NULL, NULL, '2023-04-24 14:30:35', '2023-04-24 14:30:35', 'f2e1640d-c2b7-11ed-8f01-60f26226b24d', '2c19e09a-c2b8-11ed-8f01-60f26226b9ad', 'df6dbc4f-31ee-4bad-a884-ba156aff1925'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', 'pepito', 'pepito', 'pepito@pepito.com', '$2a$10$ZsjQqBbOGlqAnPgdEiVMT.X5FoWYhYKNH9J6dHJqRJBG2lI4Fcvqu', NULL, NULL, NULL, '2023-04-24 14:44:03', '2023-04-24 14:44:03', 'f2e1640d-c2b7-11ed-8f01-60f26226b24d', '2c19e09a-c2b8-11ed-8f01-60f26226b9ad', 'df6dbc4f-31ee-4bad-a884-ba156aff1925');

-- --------------------------------------------------------

--
-- Table structure for table `user_has_activity`
--

CREATE TABLE `user_has_activity` (
  `userValue` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `uid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `activityID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_has_activity`
--

INSERT INTO `user_has_activity` (`userValue`, `createdAt`, `updatedAt`, `uid`, `activityID`) VALUES
(8, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '21d2256c-5275-4421-8092-9e4058b5419c'),
(10, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '3e926b68-5300-4a25-80e6-60181b16b8c9'),
(10, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '5384ddf6-51ea-48f1-a67e-8a00f929e4e5'),
(6, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '5613a5dd-91fa-4715-87fb-e2a44fbbe770'),
(10, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '756a5522-efbc-41ac-ac4c-c9c80af7b60c'),
(8, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'bf9d75b8-1083-41e8-8869-3a01513ced63'),
(12, '2023-04-19 14:48:24', '2023-04-19 14:48:24', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'ff5b5f92-7ca0-4693-baa7-2fa61c50bcb8'),
(14, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '21d2256c-5275-4421-8092-9e4058b5419c'),
(8, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '3e926b68-5300-4a25-80e6-60181b16b8c9'),
(10, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '5384ddf6-51ea-48f1-a67e-8a00f929e4e5'),
(16, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '5613a5dd-91fa-4715-87fb-e2a44fbbe770'),
(12, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '756a5522-efbc-41ac-ac4c-c9c80af7b60c'),
(6, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'bf9d75b8-1083-41e8-8869-3a01513ced63'),
(6, '2023-04-24 14:45:27', '2023-04-24 14:45:27', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'ff5b5f92-7ca0-4693-baa7-2fa61c50bcb8');

-- --------------------------------------------------------

--
-- Table structure for table `user_has_career`
--

CREATE TABLE `user_has_career` (
  `coincidenceValue` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `uid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `careerID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_has_career`
--

INSERT INTO `user_has_career` (`coincidenceValue`, `createdAt`, `updatedAt`, `uid`, `careerID`) VALUES
(0.0000016017263533285586, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '00eb7b75-135f-462f-8582-1f9a0da6155b'),
(0.24166086316108704, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '07772804-1335-4357-9dfc-979cd1172b4d'),
(0.000051954611990367994, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '1c8ad240-b60a-493a-9834-b002d1b51f42'),
(0.0001798402809072286, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '1f6426ca-9ca6-40d1-b7bf-f08ce59ec1e6'),
(0.00031582312658429146, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '4159e312-4b45-4258-9b92-69824a6270eb'),
(0.0011782783549278975, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '43dbc776-af6a-4624-96c7-db1d6f3e35c5'),
(0.2815937101840973, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '44a30f15-af9a-43b1-9ce9-b3aadf6f3cd2'),
(0.004379637073725462, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '46b84a97-9b2b-406e-bdf4-d62d4ba57a07'),
(0.00004856593659496866, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '6d716c5a-4980-4a43-adfc-ecf2fae1eb06'),
(0.08552749454975128, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '7ade3094-134a-49de-ad6e-ee4165905c9f'),
(0.000011082865967182443, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '7caf30b8-b316-4f3b-a36a-76b3d0b5a93a'),
(0.0019661467522382736, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '7cb590c0-3d17-41a3-97af-605d3303fd76'),
(0.0001829874236136675, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '81722983-e685-41c0-ba11-c98962a6bafc'),
(0.000009940396921592765, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '828be875-8795-428f-85fc-f58e632bd847'),
(0.0028042651247233152, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '99bc5b7e-9541-458d-8949-4f1ee521c296'),
(0.016799382865428925, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'a4997687-0957-4200-8a3f-8fa1d8f37678'),
(0.00024401271366514266, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'b7c25cf7-80c8-4066-a477-56f03bd8b12a'),
(0.000033529002394061536, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'b8474899-8210-4a9f-bada-57645f985444'),
(0.0002639754966367036, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'c356041e-1892-49d3-a80e-f1b93946dfd3'),
(0.0052910372614860535, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'c878fdfc-f2ef-4dbb-b5d3-a7753edb2edd'),
(0.008202990517020226, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'd0a24d55-da93-47d4-8270-38f3b940944a'),
(0.002117126015946269, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'd8be6884-a8d6-49b5-93d6-c53f8338a2bc'),
(0.0002517324755899608, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'f4cd65a6-8639-4443-8a33-37ae8b2f86ef'),
(0.00015242277004290372, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'f988e042-9cb1-4e32-83c6-d4235fa49eb3'),
(0.30558711290359497, '2023-04-24 14:33:06', '2023-04-24 14:33:06', '29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'fb4777c9-289c-4a03-b30f-685b0b7a1d1f'),
(0.00006733242480549961, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '00eb7b75-135f-462f-8582-1f9a0da6155b'),
(0.0027927025221288204, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '07772804-1335-4357-9dfc-979cd1172b4d'),
(0.001529207220301032, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '1c8ad240-b60a-493a-9834-b002d1b51f42'),
(0.0006313506164588034, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '1f6426ca-9ca6-40d1-b7bf-f08ce59ec1e6'),
(0.00001985720155062154, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '4159e312-4b45-4258-9b92-69824a6270eb'),
(0.00006554224091814831, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '43dbc776-af6a-4624-96c7-db1d6f3e35c5'),
(0.0029095024801790714, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '44a30f15-af9a-43b1-9ce9-b3aadf6f3cd2'),
(0.002271775621920824, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '46b84a97-9b2b-406e-bdf4-d62d4ba57a07'),
(0.0003465907066129148, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '6d716c5a-4980-4a43-adfc-ecf2fae1eb06'),
(0.017500367015600204, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '7ade3094-134a-49de-ad6e-ee4165905c9f'),
(0.000005957887424301589, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '7caf30b8-b316-4f3b-a36a-76b3d0b5a93a'),
(0.016816245391964912, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '7cb590c0-3d17-41a3-97af-605d3303fd76'),
(0.003331543644890189, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '81722983-e685-41c0-ba11-c98962a6bafc'),
(0.029833035543560982, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '828be875-8795-428f-85fc-f58e632bd847'),
(0.007079347502440214, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', '99bc5b7e-9541-458d-8949-4f1ee521c296'),
(0.0006229219725355506, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'a4997687-0957-4200-8a3f-8fa1d8f37678'),
(0.00008279713074443862, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'b7c25cf7-80c8-4066-a477-56f03bd8b12a'),
(0.005240590311586857, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'b8474899-8210-4a9f-bada-57645f985444'),
(0.003938642330467701, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'c356041e-1892-49d3-a80e-f1b93946dfd3'),
(0.005591654684394598, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'c878fdfc-f2ef-4dbb-b5d3-a7753edb2edd'),
(0.00008937219536164775, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'd0a24d55-da93-47d4-8270-38f3b940944a'),
(0.29833272099494934, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'd8be6884-a8d6-49b5-93d6-c53f8338a2bc'),
(0.3894275426864624, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'f4cd65a6-8639-4443-8a33-37ae8b2f86ef'),
(0.0052895694971084595, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'f988e042-9cb1-4e32-83c6-d4235fa49eb3'),
(0.5163853168487549, '2023-04-24 14:45:31', '2023-04-24 14:45:31', 'd91188cf-1d96-4227-acb3-a6c3010d1156', 'fb4777c9-289c-4a03-b30f-685b0b7a1d1f');

-- --------------------------------------------------------

--
-- Table structure for table `user_has_preference`
--

CREATE TABLE `user_has_preference` (
  `uid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `preferenceID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_has_preference`
--

INSERT INTO `user_has_preference` (`uid`, `preferenceID`, `createdAt`, `updatedAt`) VALUES
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '01122ff1-0c42-4b20-913a-7280600af39d', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '0556669d-df07-4de6-8e02-cd170274f3ae', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '1ec5c69f-deb3-40a6-a9a2-6ed22e13f738', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '33a0a463-8984-4162-8029-216b7b1c4a9b', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '4307caa5-f85d-4a5a-ac35-aeb184413e29', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '646af121-91cc-44a3-ad44-45df112d9249', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '7ee958f7-0343-4e2c-8ab2-1081ea1a1df8', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '96be7631-545a-4644-8d81-3acdd694b9ac', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', '9fb9cda2-1fa3-440a-b82f-6f7f6f2379b0', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'a3c06889-00cb-4fe6-9360-73b483dbb8af', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('29dc1cc4-6d99-4cca-a1d6-33b497ce725e', 'c90575ce-72e3-4002-aa28-76a1ccd2b10a', '2023-04-19 14:47:58', '2023-04-19 14:47:58'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '0556669d-df07-4de6-8e02-cd170274f3ae', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '1ec5c69f-deb3-40a6-a9a2-6ed22e13f738', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '2de45732-c4d6-44ad-9a57-d7f296489c75', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '33a0a463-8984-4162-8029-216b7b1c4a9b', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '5c28a57f-5e3e-4f1c-a503-a10958173f50', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '646af121-91cc-44a3-ad44-45df112d9249', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '7ee958f7-0343-4e2c-8ab2-1081ea1a1df8', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '8649025b-1bdf-4146-bc81-6b6271bf4ca3', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', '96742280-c9b9-415c-bead-1676a50ff6ac', '2023-04-24 14:44:24', '2023-04-24 14:44:24'),
('d91188cf-1d96-4227-acb3-a6c3010d1156', 'a3c06889-00cb-4fe6-9360-73b483dbb8af', '2023-04-24 14:44:24', '2023-04-24 14:44:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`activityID`);

--
-- Indexes for table `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`careerID`);

--
-- Indexes for table `preference`
--
ALTER TABLE `preference`
  ADD PRIMARY KEY (`preferenceID`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`roleID`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD UNIQUE KEY `name_3` (`name`),
  ADD UNIQUE KEY `name_4` (`name`);

--
-- Indexes for table `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`schoolID`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `name_2` (`name`),
  ADD UNIQUE KEY `name_3` (`name`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`statusID`),
  ADD UNIQUE KEY `statusCode` (`statusCode`),
  ADD UNIQUE KEY `statusCode_2` (`statusCode`),
  ADD UNIQUE KEY `statusCode_3` (`statusCode`),
  ADD UNIQUE KEY `statusCode_4` (`statusCode`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD KEY `roleID` (`roleID`),
  ADD KEY `statusID` (`statusID`),
  ADD KEY `schoolID` (`schoolID`);

--
-- Indexes for table `user_has_activity`
--
ALTER TABLE `user_has_activity`
  ADD PRIMARY KEY (`uid`,`activityID`),
  ADD KEY `activityID` (`activityID`);

--
-- Indexes for table `user_has_career`
--
ALTER TABLE `user_has_career`
  ADD PRIMARY KEY (`uid`,`careerID`),
  ADD KEY `careerID` (`careerID`);

--
-- Indexes for table `user_has_preference`
--
ALTER TABLE `user_has_preference`
  ADD PRIMARY KEY (`uid`,`preferenceID`),
  ADD UNIQUE KEY `user_has_preference_preferenceID_uid_unique` (`uid`,`preferenceID`),
  ADD KEY `preferenceID` (`preferenceID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_7` FOREIGN KEY (`roleID`) REFERENCES `role` (`roleID`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_8` FOREIGN KEY (`statusID`) REFERENCES `status` (`statusID`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_9` FOREIGN KEY (`schoolID`) REFERENCES `school` (`schoolID`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user_has_activity`
--
ALTER TABLE `user_has_activity`
  ADD CONSTRAINT `user_has_activity_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_has_activity_ibfk_2` FOREIGN KEY (`activityID`) REFERENCES `activity` (`activityID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_has_career`
--
ALTER TABLE `user_has_career`
  ADD CONSTRAINT `user_has_career_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_has_career_ibfk_2` FOREIGN KEY (`careerID`) REFERENCES `career` (`careerID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_has_preference`
--
ALTER TABLE `user_has_preference`
  ADD CONSTRAINT `user_has_preference_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_has_preference_ibfk_2` FOREIGN KEY (`preferenceID`) REFERENCES `preference` (`preferenceID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
