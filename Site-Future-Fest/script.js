window.addEventListener("scroll", function(){
    let header = this.document.querySelector("#header")
    header.classList.toggle('rolagem', window.scrollY > 0)
  })
 
 
  document.getElementById('addCommentBtn').addEventListener('click', addComment);
 
  function addComment() {
      const commentInput = document.getElementById('commentInput');
      const commentText = commentInput.value.trim();
 
      if (commentText === '') {
          alert('Por favor, insira um comentário.');
          return;
      }
 
      const commentSection = document.getElementById('commentsSection');
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
 
      const commentContent = document.createElement('span');
      commentContent.textContent = commentText;
      commentDiv.appendChild(commentContent);
 
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Editar';
      editBtn.onclick = function() {
          const newCommentText = prompt('Edite seu comentário:', commentText);
          if (newCommentText) {
              commentContent.textContent = newCommentText;
          }
      };
      commentDiv.appendChild(editBtn);
 
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Remover';
      deleteBtn.onclick = function() {
          commentSection.removeChild(commentDiv);
      };
      commentDiv.appendChild(deleteBtn);
 
      commentSection.appendChild(commentDiv);
      commentInput.value = '';
  }