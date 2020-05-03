@if ($sortField !== $field)
    <i class="text-muted fas fa-sort"></i>
@elseif ($sortAsc)
    <i class="fas fa-arrow-up"></i>
@else
    <i class="fas fa-arrow-down"></i>
@endif
