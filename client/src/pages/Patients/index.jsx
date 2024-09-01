import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

export default function Patients() {
  const entity = 'patients';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: ['sinumber', 'name'],
  };

  const deleteModalLabels = [' ', 'name'];

  const Labels = {
    PANEL_TITLE: 'Patients Management',
    DATATABLE_TITLE: 'Patients Module',
    ADD_NEW_ENTITY: 'Add New Patients',
    ENTITY_NAME: 'Patients',
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
