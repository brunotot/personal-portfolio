import tailwind from "./../assets/svg/tailwind.svg";
import jenkins from "./../assets/svg/jenkins.svg";
import sass from "./../assets/svg/sass.svg";
import react from "./../assets/svg/react.svg";
import heroku from "./../assets/svg/heroku.svg";
import jira from "./../assets/svg/jira.svg";
import sonarqube from "./../assets/svg/sonarqube.svg";
import typescript from "./../assets/svg/typescript.svg";
import springboot from "./../assets/svg/springboot.svg";
import gradle from "./../assets/svg/gradle.svg";
import java from "./../assets/svg/java.svg";
import npm from "./../assets/svg/npm.svg";
import mongodb from "./../assets/svg/mongodb.svg";
import mui from "./../assets/svg/mui.svg";
import git from "./../assets/svg/git.svg";
import javascript from "./../assets/svg/javascript.svg";
import github from "./../assets/svg/github.svg";
import css from "./../assets/svg/css.svg";
import html from "./../assets/svg/html.svg";
import sql from "./../assets/svg/sql.svg";
import bootstrap from "./../assets/svg/bootstrap.svg";
import eclipse from "./../assets/svg/eclipse.svg";
import jsp from "./../assets/svg/jsp.svg";
import tomcat from "./../assets/svg/tomcat.svg";
import vsc from "./../assets/svg/vsc.svg";
import intellij from "./../assets/svg/intellij.svg";
import jquery from "./../assets/svg/jquery.svg";
import thymeleaf from "./../assets/svg/thymeleaf.svg";
import gitlab from "./../assets/svg/gitlab.svg";
import mybatis from "./../assets/svg/mybatis.svg";
import linkedin from "./../assets/svg/linkedin.svg";
import stackoverflow from "./../assets/svg/stackoverflow.svg";

export type ImageObjectType = {
	src: string;
	name: string;
	acro: string;
	web: string;
};

export type ImageServiceType = {
	tailwind: ImageObjectType;
	jenkins: ImageObjectType;
	sass: ImageObjectType;
	react: ImageObjectType;
	heroku: ImageObjectType;
	jira: ImageObjectType;
	sonarqube: ImageObjectType;
	typescript: ImageObjectType;
	springboot: ImageObjectType;
	gradle: ImageObjectType;
	java: ImageObjectType;
	npm: ImageObjectType;
	mongodb: ImageObjectType;
	mui: ImageObjectType;
	git: ImageObjectType;
	github: ImageObjectType;
	javascript: ImageObjectType;
	html: ImageObjectType;
	css: ImageObjectType;
	sql: ImageObjectType;
	bootstrap: ImageObjectType;
	eclipse: ImageObjectType;
	jsp: ImageObjectType;
	tomcat: ImageObjectType;
	vsc: ImageObjectType;
	intellij: ImageObjectType;
	jquery: ImageObjectType;
	thymeleaf: ImageObjectType;
	gitlab: ImageObjectType;
	mybatis: ImageObjectType;
	linkedin: ImageObjectType;
	stackoverflow: ImageObjectType;
};

const ImageService: ImageServiceType = {
	tailwind: {
		src: tailwind,
		name: "TailwindCSS",
		acro: "TailwindCSS",
		web: "https://tailwindcss.com/",
	},
	jenkins: {
		src: jenkins,
		name: "Jenkins",
		acro: "Jenkins",
		web: "https://www.jenkins.io/",
	},
	sass: {
		src: sass,
		name: "SASS",
		acro: "SASS",
		web: "https://sass-lang.com/",
	},
	react: {
		src: react,
		name: "React",
		acro: "React",
		web: "https://reactjs.org/",
	},
	heroku: {
		src: heroku,
		name: "Heroku",
		acro: "Heroku",
		web: "https://www.heroku.com/home",
	},
	jira: {
		src: jira,
		name: "JIRA",
		acro: "JIRA",
		web: "https://www.atlassian.com/software/jira",
	},
	sonarqube: {
		src: sonarqube,
		name: "SonarQube",
		acro: "SonarQube",
		web: "https://www.sonarsource.com/products/sonarqube/",
	},
	typescript: {
		src: typescript,
		name: "TypeScript",
		acro: "TS",
		web: "https://www.typescriptlang.org/",
	},
	springboot: {
		src: springboot,
		name: "Spring Boot",
		acro: "Spring Boot",
		web: "https://spring.io/",
	},
	gradle: {
		src: gradle,
		name: "Gradle",
		acro: "Gradle",
		web: "https://gradle.org/",
	},
	java: {
		src: java,
		name: "Java",
		acro: "Java",
		web: "https://www.java.com/en/",
	},
	npm: {
		src: npm,
		name: "NPM",
		acro: "NPM",
		web: "https://www.npmjs.com/",
	},
	mongodb: {
		src: mongodb,
		name: "MongoDB",
		acro: "MongoDB",
		web: "https://www.mongodb.com/",
	},
	mui: {
		src: mui,
		name: "MaterialUI",
		acro: "MUI",
		web: "https://mui.com/",
	},
	git: {
		src: git,
		name: "Git",
		acro: "Git",
		web: "https://git-scm.com/",
	},
	github: {
		src: github,
		name: "GitHub",
		acro: "GH",
		web: "https://github.com/brunotot",
	},
	javascript: {
		src: javascript,
		name: "JavaScript",
		acro: "JS",
		web: "https://www.javascript.com/",
	},
	css: {
		src: css,
		name: "CSS3",
		acro: "CSS",
		web: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	html: {
		src: html,
		name: "HTML5",
		acro: "HTML",
		web: "https://developer.mozilla.org/en-US/docs/Web/HTML",
	},
	sql: {
		src: sql,
		name: "SQL",
		acro: "SQL",
		web: "https://www.w3schools.com/sql/",
	},
	bootstrap: {
		src: bootstrap,
		name: "Bootstrap5",
		acro: "Bootstrap",
		web: "https://getbootstrap.com/",
	},
	eclipse: {
		src: eclipse,
		name: "Eclipse",
		acro: "Eclipse",
		web: "https://www.eclipse.org/downloads/",
	},
	jsp: {
		src: jsp,
		name: "JSP",
		acro: "JSP",
		web: "https://www.oracle.com/java/technologies/jspt.html",
	},
	tomcat: {
		src: tomcat,
		name: "Tomcat",
		acro: "Tomcat",
		web: "https://tomcat.apache.org/",
	},
	vsc: {
		src: vsc,
		name: "Visual Studio Code",
		acro: "VSC",
		web: "https://code.visualstudio.com/",
	},
	intellij: {
		src: intellij,
		name: "IntelliJ IDEA",
		acro: "IntelliJ IDEA",
		web: "",
	},
	jquery: {
		src: jquery,
		name: "jQuery",
		acro: "jQuery",
		web: "",
	},
	thymeleaf: {
		src: thymeleaf,
		name: "Thymeleaf",
		acro: "Thymeleaf",
		web: "https://www.thymeleaf.org/",
	},
	gitlab: {
		src: gitlab,
		name: "GitLab",
		acro: "GitLab",
		web: "https://about.gitlab.com/",
	},
	mybatis: {
		src: mybatis,
		name: "MyBatis",
		acro: "MyBatis",
		web: "https://mybatis.org/mybatis-3/",
	},
	linkedin: {
		src: linkedin,
		name: "LinkedIn",
		acro: "LinkedIn",
		web: "https://www.linkedin.com/in/btot/",
	},
	stackoverflow: {
		src: stackoverflow,
		name: "StackOverflow",
		acro: "StackOverflow",
		web: "https://stackoverflow.com/users/14260355/brunot",
	},
};

export type ImageNameType = keyof typeof ImageService;

export default ImageService;
