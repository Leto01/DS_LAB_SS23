namespace distributedSystems.models;

entity Task {
    Key ID: UUID @(Core.Computed: true);
    todo: String;
    priority: Integer;
}