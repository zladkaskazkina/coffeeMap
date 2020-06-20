//${true ? .. : ..}
//ADD CLASS HIDDEN DISPLAY NONE
export default function renderCard(cafe) {
  return `<div class="card">
    <div class="header">
      <div class="title">${cafe.title}</div>
      <div class="rating">${cafe.totalScore}
        <div class="star"><img src="../assets/img/star.png" alt="Star"></div>
      </div>
    </div>
    <div class="address">
      <div>${cafe.address}</div>
    </div>
    <div class="content">
      <div class="leftSide">
          <div class="openingHours">
          OPENING HOURS
          <table>
            <tr>
              <th>Monday</th>
              <td>
              ${cafe.openingHours.monday ? `
              ${cafe.openingHours.monday[0]}:
              ${cafe.openingHours.monday[0][1]} - 
              ${cafe.openingHours.monday[0][2]}:
              ${cafe.openingHours.monday[0][3]}`
              : "CLOSED"}
              </td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>
              ${cafe.openingHours.tuesday ? `
              ${cafe.openingHours.tuesday[0]}:
              ${cafe.openingHours.tuesday[1]} - 
              ${cafe.openingHours.tuesday[2]}:
              ${cafe.openingHours.tuesday[3]}`
              : "CLOSED"}
              </td>
            </tr>
            <tr>
              <th>Wednesday</th> 
              <td>
              ${cafe.openingHours.wednesday ? `
              ${cafe.openingHours.wednesday[2][0]}:
              ${cafe.openingHours.wednesday[2][1]} - 
              ${cafe.openingHours.wednesday[2][2]}:
              ${cafe.openingHours.wednesday[2][3]}`
              : "CLOSED"}
              </td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>
              ${cafe.openingHours.thursday ? `
              ${cafe.openingHours.thursday[3][0]}:
              ${cafe.openingHours.thursday[3][1]} - 
              ${cafe.openingHours.thursday[3][2]}:
              ${cafe.openingHours.thursday[3][3]}`
              : "CLOSED"}
              </td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>
              ${cafe.openingHours.friday ? `
              ${cafe.openingHours.friday[0]}:
              ${cafe.openingHours.friday[1]} - 
              ${cafe.openingHours.friday[2]}:
              ${cafe.openingHours.friday[3]}`
              : "CLOSED"}
              </td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>
              ${cafe.openingHours.saturday ? `
              ${cafe.openingHours.saturday[0]}:
              ${cafe.openingHours.saturday[1]} - 
              ${cafe.openingHours.saturday[2]}:
              ${cafe.openingHours.saturday[3]}`
              : "CLOSED"}
              </td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>
              ${cafe.openingHours.sunday ? `
              ${cafe.openingHours.sunday[0]}:
              ${cafe.openingHours.sunday[1]} - 
              ${cafe.openingHours.sunday[2]}:
              ${cafe.openingHours.sunday[3]}`
              : "CLOSED"}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="rightSide">
        <div class="filters">
          
          <div class="icon ${cafe.nonDairy ? "" : "hidden"}"><img src="../assets/img/milk.png"></div>
          <div class="icon ${cafe.deCaf ? "" : "hidden"}"><img src="../assets/img/decaf.png"></div>
          <div class="icon ${cafe.hotFood ? "" : "hidden"}"><img src="../assets/img/soup.png"></div>
          <div class="icon ${cafe.barrierFree ? "" : "hidden"}"><img src="../assets/img/disabled.png"></div>
          <div class="icon ${cafe.freelance ? "" : "hidden"}"><img src="../assets/img/laptop.png"></div>
          <div class="icon ${cafe.baby ? "" : "hidden"}"><img src="../assets/img/baby.png"></div>
          <div class="icon ${cafe.pets ? "" : "hidden"}"><img src="../assets/img/pawprint.png"></div>
          <div class="icon ${cafe.terrace ? "" : "hidden"}"><img src="../assets/img/outdoors.png"></div>
        </div>
        <div class="links">      
          <div class="web btn btn-light">Web</div>
        </div>
      </div>
    </div>
    
  </div>`
}
