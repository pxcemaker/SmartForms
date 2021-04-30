<?php require("head.beispiel.inc.php"); ?>
<?php require("nav.inc.php"); ?>
<div style="margin-top: 15rem;"></div>
<sf-dynamicform></sf-dynamicform>
<div class="grid-container">
        <div class="kasten item-1-1">
          <sf-question></sf-question>
          <textarea name="inputfield"></textarea>
        </div>

        <div class="kasten item-2-1">
          <form class="grid-container" novalidate>
            <div class="item-1-1">
              <h3>Frage erstellen</h3>
              <p>Wählen Sie die Art der Fragejkljkl aus und schreiben Sie Antworten und Fragen in die Felder.</p>
            </div>

            <div class="item-1-2 grid-container">
              <label class="item-1-1">Frage:</label>
              <input
                type="text"
                id="fquestion"
                class="item-1-2"
                name="question"
                value="question"
              ></input>
            </div>

            <div class="item-2-2 grid-container">
              <label class="item-1-1">Antworttyp:</label>
              <div class="item-1-2">
                <div class="answertypeoptions">
                  <input
                    id="fanswertype rtx"
                    name="answertype"
                    type="radio"
                    value="rtx"
                  ></input>
                  <label class="choosetype">Text-Antwort</label>
                </div>

                <div class="answertypeoptions">
                  <input
                    id="fanswertype checkbox"
                    name="answertype"
                    type="radio"
                    value="checkbox"
                  ></input>
                  <label class="choosetype">Multiple-Choice</label>
                </div>

                <div class="answertypeoptions">
                  <input
                    id="fanswertype radio"
                    name="answertype"
                    type="radio"
                  ></input>
                  <label class="choosetype">Radio-Buttons</label>
                </div>
              </div>
            </div>

            <button class="item-2-3-btn" type="submit">
              safe
            </button>
          </form>
        </div>
      </div>
<div style="margin-bottom: 15rem;"></div>
<?php include("footer.inc.php"); ?>