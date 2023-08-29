const dropTarget = document.querySelector(".drop-target");
const dragItems = document.querySelectorAll(".drag-item");

dragItems.forEach((item) => {
  // 드래그를 시작할 떄
  item.addEventListener("dragstart", () => {
    setTimeout(() => {
      item.classList.add("dragging");
    }, 0);
  });

  // 드래그를 끝낼 때
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

function handleDragover(event) {
  event.preventDefault(); // 다음에 일어날 이벤트 제어
  const draggingItem = dropTarget.querySelector(".dragging");
  const notDraggingItems = Array.from(
    dropTarget.querySelectorAll(".drag-item:not(.dragging)")
  );
  const nextItem = notDraggingItems.find((item) => {
    return event.clientY <= item.offsetTop + item.offsetHeight / 2;
  });

  dropTarget.insertBefore(draggingItem, nextItem);
}

dropTarget.addEventListener("dragover", handleDragover);
dropTarget.addEventListener("dragenter", (event) => event.preventDefault());
