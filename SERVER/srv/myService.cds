using distributedSystems.models from '../db/dbModels';

service myService @(path: 'api'){
    entity task as projection on models.Task;
}