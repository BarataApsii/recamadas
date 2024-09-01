import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

export default function Prescriptions() {
  const entity = 'prescriptions';
  const searchConfig = {
    displayLabels: ['name'],
    searchFields: ['name'],
  };

  const deleteModalLabels = [' ', 'name'];

  const Labels = {
    PANEL_TITLE: 'Prescriptions Management',
    DATATABLE_TITLE: 'Prescriptions Module',
    ADD_NEW_ENTITY: 'Add New Prescriptions',
    ENTITY_NAME: 'Prescriptions',
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
