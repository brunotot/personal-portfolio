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
	shortName: string;
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
	tailwind: { src: tailwind, name: "TailwindCSS", shortName: "TailwindCSS" },
	jenkins: { src: jenkins, name: "Jenkins", shortName: "Jenkins" },
	sass: { src: sass, name: "SASS", shortName: "SASS" },
	react: { src: react, name: "React", shortName: "React" },
	heroku: { src: heroku, name: "Heroku", shortName: "Heroku" },
	jira: { src: jira, name: "JIRA", shortName: "JIRA" },
	sonarqube: { src: sonarqube, name: "SonarQube", shortName: "SonarQube" },
	typescript: { src: typescript, name: "TypeScript", shortName: "TS" },
	springboot: {
		src: springboot,
		name: "Spring Boot",
		shortName: "Spring Boot",
	},
	gradle: { src: gradle, name: "Gradle", shortName: "Gradle" },
	java: { src: java, name: "Java", shortName: "Java" },
	npm: { src: npm, name: "NPM", shortName: "NPM" },
	mongodb: { src: mongodb, name: "MongoDB", shortName: "MongoDB" },
	mui: { src: mui, name: "MaterialUI", shortName: "MUI" },
	git: { src: git, name: "Git", shortName: "Git" },
	github: { src: github, name: "GitHub", shortName: "GH" },
	javascript: { src: javascript, name: "JavaScript", shortName: "JS" },
	css: { src: css, name: "CSS3", shortName: "CSS" },
	html: { src: html, name: "HTML5", shortName: "HTML" },
	sql: { src: sql, name: "SQL", shortName: "SQL" },
	bootstrap: { src: bootstrap, name: "Bootstrap5", shortName: "Bootstrap" },
	eclipse: { src: eclipse, name: "Eclipse", shortName: "Eclipse" },
	jsp: { src: jsp, name: "JSP", shortName: "JSP" },
	tomcat: { src: tomcat, name: "Tomcat", shortName: "Tomcat" },
	vsc: { src: vsc, name: "Visual Studio Code", shortName: "VSC" },
	intellij: {
		src: intellij,
		name: "IntelliJ IDEA",
		shortName: "IntelliJ IDEA",
	},
	jquery: {
		src: jquery,
		name: "jQuery",
		shortName: "jQuery",
	},
	thymeleaf: { src: thymeleaf, name: "Thymeleaf", shortName: "Thymeleaf" },
	gitlab: { src: gitlab, name: "GitLab", shortName: "GitLab" },
	mybatis: { src: mybatis, name: "MyBatis", shortName: "MyBatis" },
	linkedin: { src: linkedin, name: "LinkedIn", shortName: "LinkedIn" },
	stackoverflow: {
		src: stackoverflow,
		name: "StackOverflow",
		shortName: "StackOverflow",
	},
};

export type ImageNameType = keyof typeof ImageService;

export default ImageService;
