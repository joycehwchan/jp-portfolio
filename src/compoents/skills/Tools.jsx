import React from 'react'

const Tools = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">ツール</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class="devicon-git-plain skills__devicon"></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">    
                <i class="devicon-github-original skills__devicon"></i>
                <div>
                    <h3 className="skills__name">Github</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i class="devicon-trello-plain skills__devicon"></i>
                <div>
                    <h3 className="skills__name">Trello</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>

            <div className="skills__data">    
                <i class="devicon-slack-plain skills__devicon"></i>
                <div>
                    <h3 className="skills__name">Slack</h3>
                    {/* <span className="skills__level">Basic</span> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Tools