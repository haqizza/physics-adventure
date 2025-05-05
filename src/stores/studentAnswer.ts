import { defineStore } from "pinia";
import { ref } from "vue";

interface StudentAnswer {
  id?: number;
  uuid?: string;
  name: string;
  studentClass: string;
  state_1: string;
  state_2: string;
  state_3: string;
  hypothesis_1: string;
  hypothesis_2: string;
  hypothesis_3: string;
  table_p1_1: number;
  table_p1_2: number;
  table_p1_3: number;
  table_p2_1: number;
  table_p2_2: number;
  table_p2_3: number;
  conslusion: string;
}

export const useStudentAnswerStore = defineStore('studentAnswer', () => {
  const id = ref('')
  const uuid = ref('')
  const name = ref('')
  const studentClass = ref('')
  const state_1 = ref('')
  const state_2 = ref('')
  const state_3 = ref('')
  const hypothesis_1 = ref('')
  const hypothesis_2 = ref('')
  const hypothesis_3 = ref('')
  const table_p1_1 = ref(0)
  const table_p1_2 = ref(0)
  const table_p1_3 = ref(0)
  const table_p2_1 = ref(0)
  const table_p2_2 = ref(0)
  const table_p2_3 = ref(0)
  const conslusion = ref('')

  const API_URL = import.meta.env.VITE_BASE_API

  const _body: StudentAnswer = {
    name: name.value,
    studentClass: studentClass.value,
    state_1: state_1.value,
    state_2: state_2.value,
    state_3: state_3.value,
    hypothesis_1: hypothesis_1.value,
    hypothesis_2: hypothesis_2.value,
    hypothesis_3: hypothesis_3.value,
    table_p1_1: table_p1_1.value,
    table_p1_2: table_p1_2.value,
    table_p1_3: table_p1_3.value,
    table_p2_1: table_p2_1.value,
    table_p2_2: table_p2_2.value,
    table_p2_3: table_p2_3.value,
    conslusion: conslusion.value
  }

  function createStudentAnswer() {
    fetch(`${API_URL}/answer`, {
      method: 'POST',
      body: JSON.stringify(_body),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(function() {})
      .catch(function() { })
  }

  return {
    id,
    uuid,
    name,
    studentClass,
    state_1,
    state_2,
    state_3,
    hypothesis_1,
    hypothesis_2,
    hypothesis_3,
    table_p1_1,
    table_p1_2,
    table_p1_3,
    table_p2_1,
    table_p2_2,
    table_p2_3,
    conslusion,
    createStudentAnswer
  }
})
