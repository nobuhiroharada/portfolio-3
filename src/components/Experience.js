import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020/10-2021/1</h3>
            <p>営業支援システム</p>
            <p>担当工程：設計, 実装, テスト(PHPUnit)</p>
            <p>使用言語,FW,DB：PHP,Laravel,TypeScript,Vue.js,PostgreSQL</p>
            <p>その他：Backlog,Teams,Slack,Docker,Git</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020/6-2020/9</h3>
            <p>求職者・面談者支援システム</p>
            <p>担当工程：実装</p>
            <p>使用言語,FW,DB：PHP,Laravel,JavaScript,jQuery,MySQL</p>
            <p>その他：Backlog,Zoom,Chatwork,Docker,Git</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <div className="timeline-content">
              <h3>2020/2-2020/5</h3>
              <p>Webマーケター支援システム</p>
              <p>担当工程：実装</p>
              <p>使用言語,FW,DB：PHP,JavaScript,jQuery,MySQL,PostgreSQL</p>
              <p>その他：Redmine,Chatwork,Confluence,Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
