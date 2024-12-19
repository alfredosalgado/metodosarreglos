  // Inicialización del arreglo de tareas con su ID, descripción y estado.
  const tareas = [
    { id: 1, descripcion: "Estudiar métodos de arreglos", completado: false },
    { id: 2, descripcion: "Terminar desafío Todo List", completado: false },
    { id: 3, descripcion: "Revisar apuntes de clase", completado: false },
  ];

  // Selección de elementos HTML
  const listaTareas = document.querySelector("#lista-tareas");
  const resumenTotal = document.querySelector("#resumen-total");
  const resumenRealizadas = document.querySelector("#resumen-realizadas");
  const inputTarea = document.querySelector("#input-tarea");
  const btnAgregar = document.querySelector("#btn-agregar");

  // Renderizar todas las tareas
  const renderizarTareas = () => {
    const html = tareas
      .map(
        (tarea) => `
        <li class="tarea-item list-group-item d-flex justify-content-between align-items-center">
          <div class="row w-100">
            <div class="col-2 text-center">
              <p>${tarea.id}</p>
            </div>
            <div class="col-6">
              <span class="${tarea.completado ? 'completada' : ''}">
                ${tarea.descripcion}
              </span>
            </div>
            <div class="col-2 text-center">
              <input type="checkbox" class="form-check-input" ${tarea.completado ? 'checked' : ''} onchange="toggleTaskCompleted(${tarea.id})">
            </div>
            <div class="col-2 text-center">
              <button class="btn btn-danger btn-sm" onclick="deleteTask(${tarea.id})">Eliminar</button>
            </div>
          </div>
        </li>
      `
      )
      .join("");

    listaTareas.innerHTML = html;

    // Contar el total de tareas y las completadas
    const totalTareas = tareas.length;
    const tareasCompletadas = tareas.filter((tarea) => tarea.completado).length;

    resumenTotal.innerHTML = totalTareas;
    resumenRealizadas.innerHTML = tareasCompletadas;
  };

  // Agregar una nueva tarea
  const agregarTarea = () => {
    const descripcion = inputTarea.value.trim();
    if (descripcion) {
      tareas.push({
        id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
        descripcion,
        completado: false,
      });
      inputTarea.value = "";
      renderizarTareas();
    }
  };

  // Cambiar el estado de completado de una tarea
  const toggleTaskCompleted = (id) => {
    const tarea = tareas.find((tarea) => tarea.id === id);
    if (tarea) {
      tarea.completado = !tarea.completado;
      renderizarTareas();
    }
  };

  // Eliminar una tarea
  const deleteTask = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
      tareas.splice(index, 1);
      renderizarTareas();
    }
  };

  // Asignar eventos
  btnAgregar.addEventListener("click", agregarTarea);

  // Renderizado inicial
  renderizarTareas();
;
