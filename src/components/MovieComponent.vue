<template>
    <div class="movie">
        <img
            :src="movie.poster_path"
            :alt="movie.original_title"
            class="movie-img" />
        <div>
            <div class="movie-name">
                {{ movie.original_title }} ({{ movie.release_date }})
            </div>
            <span class="movie-overview">{{ movie.overview }}</span>
            <div class="movie-buttons">
                <button class="btn movie-buttons-watched" @click="toggleWatched(movie)">
                    <span v-if="!movie.isWatched">Watched</span>
                    <span v-else>Unwatched</span>
                </button>
                <button class="btn movie-buttons-delete">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
// const props = defineProps({
//   movie: {
//     type: Object,
//     required: true,
//     default: () => {},
//   },
// });
import { useMovieStore } from '@/stores/MovieStore';

const movieStore = useMovieStore();

function toggleWatched(movie) {
    let id = movieStore.movies.findIndex(x => x.id === movie.id);
    
    movieStore.movies[id].isWatched = !movieStore.movies[id].isWatched;
}
</script>

<script>
export default {
    name: 'NavComponent',
    props: {
        movie: {
            type: Object,
            required: true,
            default: () => {
            },
        },
    },
    data() {
        return {
            isLoading: false,
        };
    },
    mounted() {
    },
    methods: {},
};

</script>

<style lang="css" scoped>
.movie {
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 30px;
    margin-bottom: 20px;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 10px;
}

.movie-accept {
    margin-right: 10px;
}

.movie-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
}

.movie-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
}

.movie-overview {
    display: block;
    margin-bottom: 20px;
}

.movie-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.movie-buttons-watched {
    color: #fff;
    background: #1eb4c3;
}

.movie-buttons-watched__icon {
    width: 15px;
    margin-left: 10px;
}

.movie-buttons-delete {
    color: #fff;
    background: #ff2a2a;
}
</style>
