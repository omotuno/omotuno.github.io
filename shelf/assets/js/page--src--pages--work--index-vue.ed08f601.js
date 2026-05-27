(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(e,t,n){"use strict";n.r(t);var o=n(5),a=[{name:"AI Data Pipeline",color:"rgba(0, 207, 180, .1)",logo:null,siteName:null,internalPage:!1,comingSoon:!0},{name:"Cloud Data Warehouse",color:"rgba(0, 112, 243, .1)",logo:null,siteName:null,internalPage:!1,comingSoon:!0},{name:"Full Stack App",color:"rgba(10, 37, 64, .08)",logo:null,siteName:null,internalPage:!1,comingSoon:!0}],i=n(55),r=n(35),l=n(0);let s,c,m=e=>e;Object(l.d)(s||(s=m`
  .is-tabbing .project__link:focus {
    outline: none;

    & + .project__logo {
      filter: contrast(0.8);
    }
  }
`));var p={components:{StyledWork:Object(l.c)(i.a)(c||(c=m`
  main {
    max-width: 1280px;
  }

  .page-header__heading {
    margin-bottom: 0;
  }

  .coming-soon-container {
    margin-top: 3rem;
  }

  .coming-soon {
    padding: 3rem 2rem;
    border-radius: 0.5rem;
    background: rgba(0, 207, 180, 0.06);
    border: 1px solid rgba(0, 207, 180, 0.2);

    p {
      margin: 0;
      font-size: 1.1em;
      line-height: 1.8;
    }

    a {
      color: var(--electric-blue);
    }
  }

  #projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project {
    flex-grow: 0;
    flex-shrink: 1;
    overflow: hidden;
    position: relative;
    margin-bottom: 1.2em;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0px 8px 6px -6px rgba(235, 234, 242, 0.58);
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition-property: transform, box-shadow;

    @media (max-width: 659px) {
      width: 100%;
    }

    @media (min-width: 660px) and (max-width: 939px) {
      flex-basis: calc((100% - 1em) / 2);
    }

    @media (min-width: 940px) {
      flex-basis: calc((100% - 2em) / 3);
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 15px 8px 6px -6px rgba(235, 234, 242, 0.58);
    }

    &__logo {
      margin: 0;
      height: 10em;
      display: flex;
      align-items: center;
      transition: filter 0.3s;
      justify-content: center;
      background: rgba(245, 244, 252, 0.62);
    }

    &__info {
      padding: 2em;

      &__siteName {
        white-space: pre;
      }
    }

    h5 {
      margin: 0;
    }

    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80%;
      overflow: hidden;
      text-indent: -9999px;
      z-index: 0;
      transition: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`))},created(){this.showConsoleMarketingBanner()},computed:{projects:()=>a.map(e=>Object(o.a)(Object(o.a)({},e),{},{summaryLinkLabel:e.internalPage?null:e.name+" live demo.",siteURL:e.siteName?"https://"+e.siteName:null,path:"/work/"+Object(r.b)(e.name)}))},metaInfo:{title:"Work"}},d=n(1),g=Object(d.a)(p,(function(){var e=this.$createElement,t=this._self._c||e;return t("StyledWork",{attrs:{id:"work",title:"Work - Olusegun Omotunde",description:"Data engineering projects, AI applications, and full stack systems by Olusegun Omotunde"}},[t("PageHeader",{attrs:{title:"work",desc:"Projects coming soon."}}),t("section",{staticClass:"work-container coming-soon-container"},[t("div",{staticClass:"coming-soon"},[t("p",[this._v("\n        I'm currently building out this section with AI and data engineering\n        projects. Check back soon, or follow my work on\n        "),t("a",{attrs:{href:"https://github.com/omotuno",target:"_blank",rel:"noopener noreferrer"}},[this._v("GitHub")]),this._v(".\n      ")])])])],1)}),[],!1,null,null,null);t.default=g.exports}}]);