<template>
  <header class="header">
    <nav class="navbar">
      <ul class="navbar__list">
        <li class="navbar__item has-dropdown">
          <a>LES HOMIES</a>
          <ul class="dropdown">
            <li class="dropdown__item">
              NOTRE HISTOIRE
            </li>
            <li class="dropdown__item">
              LES HORRAIRES
            </li>
            <li class="dropdown__item">
              COMMENT VENIR
            </li>
          </ul>
        </li>
        <li class="navbar__item">
          Test 2
        </li>
        <li class="navbar__item">
          Test 3
        </li>
        <li class="navbar__item">
          Test 4
        </li>
        <li class="navbar__item">
          Test 5
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
$border-color: #dcdfe6;
$element-hover: #f6f8fa;

.navbar {
  &__list {
    display: flex;
    list-style: none;
    flex-direction: row;
    padding: 0;
    margin:0;
  }
  &__item {
    padding: 1rem;
    position: relative;
    cursor: pointer;

    .dropdown {
      margin-top: 1rem;
      visibility: hidden;
      position: absolute;
      padding: 0;
      margin-left: 0;
      list-style: none;
      border: 1px solid $border-color;
      left: 0;

      &__item {
        padding: .5rem 1.5rem;
        white-space: nowrap;

        &:hover {
          background-color: $element-hover;
        }
      }
    }
  }

  .has-dropdown:hover {
    background-color: $element-hover;
    .dropdown {
      visibility: visible;
    }
  }
}
</style>
