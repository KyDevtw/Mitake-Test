import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import "../style/Index.scss";

function Index() {
  return (
    <>
      {/* hero section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Link to="/" className="col-12 col-lg-8 px-0">
              <img
                src="https://cloud.culture.tw/e_new_upload/activity/index/A0/B0/C0/D0/E0/F246/cb739e56-0fc7-4701-ad69-cd1f68df8244_640%23640.jpg"
                alt=""
              />
            </Link>
            <div className="col-4 p-0 flex-wrap">
              <Link to="/" className=" pl-2">
                <img
                  src="https://cloud.culture.tw/e_new_upload/activity/index/A0/B0/C0/D0/E0/F243/15101ee8-d926-42da-a83c-5e653a8bc915%5F640%23640.jpg"
                  alt=""
                />
              </Link>
              <Link to="/" className="pl-2">
                <img
                  className="pt-2"
                  src="https://cloud.culture.tw/e_new_upload/activity/index/A0/B0/C0/D0/E0/F245/4664c663-81f0-40e9-a42d-c6f0f3025ea5%5F640%23640.jpg"
                  alt=""
                />
              </Link>
            </div>
          </Row>
        </Container>
      </section>
      <Container>
        {/* 景點 活動 展演設施 街頭藝人 section */}
        <Row className="event-class justify-content-center my-5">
          <h6
            className="col-12 mb-4"
            style={{
              fontSize:
                "1.2rem",
              fontWeight:"500",
              textAlign:"center"
            }}
          >
            點擊以下圖標進入活動資料串接
          </h6>
          <Link to="/event" className="col-6 col-lg-3">
            <li className="class-link-1 mx-auto"></li>
          </Link>
          <Link to="/event" className="col-6 col-lg-3">
            <li className="class-link-2 mx-auto"></li>
          </Link>
          <Link to="/event" className="col-6 col-lg-3">
            <li className="class-link-3 mx-auto"></li>
          </Link>
          <Link to="/event" className="col-6 col-lg-3">
            <li className="class-link-4 mx-auto"></li>
          </Link>
        </Row>
        {/* Event Chart and Recommanded*/}
        <Row className="event-chart">
          <div className="col-12 col-lg-8 mb-5">
            <h4>活動推薦</h4>
            <div className="recom-card py-4 d-flex flex-wrap">
              <div className="col-5 my-auto">
                <img
                  src="https://cloud.culture.tw/e_new_upload/task/6a4137d4-aae7-4e6d-838b-aaf069042338/B0211037724/449ddb3ea1126619c0ee1dcf43a2dc47a51be8cb%5F180%23180.jpg"
                  alt=""
                />
              </div>
              <div className="col-12 col-sm-7">
                <h6>其他</h6>
                <h5>音樂好有趣-說故事時間</h5>
                <span>2021/01/05~2021/10/26 10:00 至 10:00</span>
              </div>
            </div>
            <div className="recom-card py-4 d-flex flex-wrap">
              <div className="col-5 my-auto">
                <img
                  src="https://cloud.culture.tw/e_new_upload/task/6a4137d4-aae7-4e6d-838b-aaf069042338/B0211037724/449ddb3ea1126619c0ee1dcf43a2dc47a51be8cb%5F180%23180.jpg"
                  alt=""
                />
              </div>
              <div className="col-7">
                <h6>講座</h6>
                <h5>醜小鴨故事劇場</h5>
                <span>2021/09/03~2021/09/14 10:30 至 17:30</span>
              </div>
            </div>
            <div className="recom-card py-4 d-flex flex-wrap">
              <div className="col-5 my-auto">
                <img
                  src="https://cloud.culture.tw/e_new_upload/task/6a4137d4-aae7-4e6d-838b-aaf069042338/B0211037724/449ddb3ea1126619c0ee1dcf43a2dc47a51be8cb%5F180%23180.jpg"
                  alt=""
                />
              </div>
              <div className="col-7">
                <h6>展覽</h6>
                <h5>心靈風景－邱麗玲創作展</h5>
                <span>2021/09/04 10:00 至 11:00</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-5">
            <h4>活動熱榜</h4>
            <ul className="chart-card">
              <li className="chart1">
                <span>研習課程</span>110年樂齡學習幸福系列...
              </li>
              <li className="chart2">
                <span>展覽</span>（館藏特色系列）–漫畫特...
              </li>
              <li className="chart3">
                <span>展覽</span>鹽埕手作課成果聯展
              </li>
              <li className="chart4">
                <span>研習課程</span>110年多元文化─社區新...
              </li>
              <li className="chart5">
                <span>展覽</span>精選好書 主題書展
              </li>
              <li className="chart6">
                <span>展覽</span>新興分館 高雄100文史...
              </li>
              <li className="chart7">
                <span>展覽</span>高雄100文史書展
              </li>
              <li className="chart8">
                <span>音樂</span>110國樂演奏(免費)
              </li>
              <li className="chart9">
                <span>其他</span>【大專院校招募】2021...
              </li>
              <li className="chart10">
                <span>其他</span>癒健2021 Logic...
              </li>
            </ul>
          </div>
          <Link className="mb-5">
            <div>+更多活動</div>
          </Link>
        </Row>
      </Container>
      {/* Topic Recommand */}
      <section className="top-recomd">
        <Container>
          <Row>
            <h4 className="mx-auto my-5">主題推薦</h4>
            <div className="col-12 p-0 topic-card1 d-flex flex-wrap mb-3">
              <div className="col-12 col-lg-8 p-0">
                <img
                  src="https://cloud.culture.tw/e_new_upload/activity/issue/A0/B0/C0/D0/E0/F77/3226f042-17be-4c91-aa1e-222ce5d14bc0_640%23640.jpg"
                  alt=""
                />
              </div>
              <div className="col-12 col-lg-4">
                <div>夢想「誠徵」，距離實現僅「藝」步 </div>
                最近時間很多、想法很多；宅家把所有靈感寫下來、錄下來、具象化出來。投遞成果，志得「藝」滿就看這次！
              </div>
            </div>
            <div className="col-12 col-lg-6 topic-card2 p-0 pr-lg-2 mb-3">
              <img
                src="https://cloud.culture.tw/e_new_upload/task/a66dc343-cd8b-4ee0-a265-8d7fff520c3b/C2_315080000H_080482/b80fee9c3ca9d15c2bce5475a07e53eebfe2aec3.jpg"
                alt=""
              />
              <h3>2021 臺北時裝周</h3>
            </div>
            <div className="col-12 col-lg-6 topic-card2 p-0 pl-lg-2 mb-3">
              <img
                src="https://cloud.culture.tw/e_new_upload/task/a66dc343-cd8b-4ee0-a265-8d7fff520c3b/C2_315080000H_080485/e3418061be76a6c806de500cdf1b1187fa707bf1.jpg"
                alt=""
              />
              <h3>2021 日月潭萬人泳渡</h3>
            </div>
          </Row>
        </Container>
      </section>
      {/* Street Performers */}
      <Container>
        <Row className="street-perform">
          <h4 className="mx-auto my-5">街頭藝人</h4>
        </Row>
        <Row className="street-perform">
          <div className="col-6 col-lg-3 mb-4">
            <div className="performer">
              <img
                src="https://busker.culture.tw/c_upload_busker/performer/personal/image/2018-08-21/0ad0ad88-ee43-4986-813f-bb31ce72cb7f/6e10d3c24fb64fdc88a7bc71a8a64bf6.JPG"
                alt=""
              />
              <h6>林璇琳</h6>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <div className="performer">
              <img
                src="https://busker.culture.tw/c_upload_busker/performer/personal/image/2020-10-05/72613d52-fcf0-47fb-85df-5f3111af31e1/b8b6ad58d3649107fc477f87860ae1e0.jpg"
                alt=""
              />
              <h6>林聖雄</h6>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <div className="performer">
              <img
                src="https://busker.culture.tw/c_upload_busker/performer/personal/image/2020-09-30/ceff9204-9a38-4654-8d61-1c3e9e2c5c74/886a0d519e959b26228246ee85d81a27.jpg"
                alt=""
              />
              <h6>林玉如</h6>
            </div>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <div className="performer">
              <img
                src="https://busker.culture.tw/c_upload_busker/performer/personal/image/2018-08-27/1159523a-959a-4635-8dc3-69fe40bb6a09/f6fdd8a7e6c0a31b62218295b70cc65a.JPG"
                alt=""
              />
              <h6>廖崇郁</h6>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Index);
